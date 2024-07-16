import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChangeEvent, useState } from "react";
import { api_post_predict } from "@/api/post-predict";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS_URL } from "@/enums/endpoints.enum";
import { useToast } from "./ui/use-toast";

const MAX_IMAGE_SIZE = 5242880; // 5 MB
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/jpg"];
// const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];

function getImageData(event: ChangeEvent<HTMLInputElement>) {
  // FileList is immutable, so we need to create a new one
  const dataTransfer = new DataTransfer();

  // Add newly uploaded images
  Array.from(event.target.files!).forEach((image) => dataTransfer.items.add(image));

  const files = dataTransfer.files;
  const displayUrl = URL.createObjectURL(event.target.files![0]);

  return { files, displayUrl };
}

const formSchema = z.object({
  files: z
    .custom<FileList>((val) => val instanceof FileList, "Silahkan pilih gambar")
    .refine((files) => files.length > 0, `Silahkan pilih gambar`)
    .refine((files) => files.length <= 1, `Only 1 image are allowed.`)
    .refine((files) => Array.from(files).every((file) => file.size <= MAX_IMAGE_SIZE), `File size should be less than 5 MB.`)
    .refine((files) => Array.from(files).every((file) => ALLOWED_IMAGE_TYPES.includes(file.type)), "Hanya ekstensi .jpg and .jpeg yang dapat diupload"),
});

const KlasifikasiForm = () => {
  const [preview, setPreview] = useState<string>("");
  const [isPostPending, setIsPostPending] = useState<boolean>(false);

  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formData: z.infer<typeof formSchema>) {
    setIsPostPending(true);
    const data = await api_post_predict(formData.files[0]);
    if (data.code === 200) {
      setIsPostPending(false);
      navigate(ENDPOINTS_URL.HASIL_KLASIFIKASI, {
        state: {
          data: data.data,
          previewUrl: preview,
        },
      });
    } else {
      setIsPostPending(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="files"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { onChange, value, ...rest } }) => (
            <FormItem>
              <FormLabel>Input Gambar</FormLabel>
              <FormControl>
                <Input
                  className="dark:file:text-foreground"
                  type="file"
                  onChange={(event) => {
                    const { files, displayUrl } = getImageData(event);
                    setPreview(displayUrl);
                    onChange(files);
                  }}
                  {...rest}
                />
              </FormControl>
              <FormDescription>Gambar dengan ekstensi .jpg dan .jpeg</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex h-[300px] sm:h-[400px] w-full items-center justify-center border border-input p-2 rounded-sm">
          {preview ? <img src={preview} className="mx-auto max-h-[300px] sm:max-h-[400px] h-full" /> : <div className="text-center text-gray-400">Preview Gambar</div>}
        </div>

        <Button type="submit" isLoading={isPostPending} loadingText="Submitting...">
          Klasifikasi
        </Button>
      </form>
    </Form>
  );
};

export default KlasifikasiForm;
