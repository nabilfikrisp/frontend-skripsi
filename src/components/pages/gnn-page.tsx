const GNNPage = () => {
  return (
    <article className="mx-auto mb-10 w-full max-w-[1280px] px-5 pt-10 text-xl leading-relaxed tracking-wide xl:px-0 sm:leading-loose">
      <h1 className="font-paytone text-5xl">Pengenalan Graph Neural Network</h1>
      <p className="mt-5">
        Pada permasalahan computer vision modern, CNN telah menjadi state-of-the-art dalam menyelesaikan masalah tersebut. Namun, beberapa tahun terakhir,{" "}
        <b>GNN</b> mulai muncul ke permukaan sebagai alternatif yang menjanjikan, membawa pendekatan baru dalam pengolahan data visual.
      </p>
      <h2 className="mt-8 font-paytone text-4xl">Graf</h2>
      <p className="mt-5">
        <b>Graf</b> merupakan representasi dari sekumpulan elemen beserta hubungan antara elemen-elemen tersebut. Elemen-elemen ini disebut sebagai node dan
        hubungan-hubungan tersebut disebut sebagai edge. Sebuah graf G dinotasikan sebagai G = (V,E) dimana V adalah vertex atau node dan E adalah edge. Sebuah
        edge E yang menghubungkan node x dan node y dinotasikan sebagai E = (Vx, Vy).
      </p>
      <div className="flex flex-col gap-5">
        <img src="/gnn-image/graf.png" alt="" className="mx-auto mt-10 rounded" />
        <p className="text-center">Contoh Graf sederhana yang memiliki 4 node dan 3 edge</p>
      </div>
      <h2 className="mt-8 font-paytone text-4xl">GNN (Graph Neural Network)</h2>
      <p className="mt-5">
        <b>GNN</b> dirancang khusus untuk menangani data yang diorganisir dalam struktur graf. Graf adalah representasi matematika dari node yang terhubung oleh
        edge, sehingga sangat cocok untuk memodelkan hubungan dan ketergantungan dalam sistem yang kompleks. Pengaplikasian GNN digunakan dalam berbagai bidang
        seperti jejaring sosial, sistem rekomendasi, sistem deteksi intrusi, natural language processing, sistem prediksi, dan bahkan di bidang computer vision
        seperti image generation serta klasifikasi gambar.
      </p>
      <h2 className="mt-8 font-paytone text-4xl">Vision GNN</h2>
      <p className="mt-5">
        <b>Vision GNN</b> (ViG) adalah sebuah arstiketur GNN untuk memecahkan masalah spesifik yaitu masalah visual atau computer vision. Vision GNN merukapan
        karya dari Kai Han dan kawan-kawan (2022) pada konferensi NeurIPS (Neural Information Processing Systems) pada tahun 2022 dengan judul karya “Vision
        GNN: An Image is Worth Graph of Nodes”.
      </p>
      <h3 className="mt-5 font-paytone text-4xl">Gambar Sebagai Graf</h3>
      <p className="mt-5">
        Pada model Vision GNN, representasi gambar sebagai graf dilakukan dengan cara mengubah gambar menjadi bagian-bagian kecil yang disebut patch. Patch ini
        dibentuk menggunakan lapisan Stem yang ada pada arsitektur model Vision GNN. Keluaran dari lapisan Stem ini berupa patch beserta vektor fitur dari
        setiap patch-nya.
      </p>
      <div className="mx-auto my-8 flex flex-col items-center gap-5">
        <img src="/gnn-image/image-to-patch.jpg" alt="" className="w-[400px] rounded" />
        <p>Visualisasi Gambar Menjadi Patch</p>
      </div>
      <p>
        Setiap patch nya mempunyai vektor fitur yang merupakan hasil ekstraksi pixel gambar yang dilakukan oleh lapisan Stem. Setiap patch ini selanjutnya
        direpresentasikan sebagai node atau simpul dan setiap node-nya memiliki node feature berupa vektor fitur yang disebutkan sebelumnya.{" "}
      </p>
      <div className="mx-auto my-8 flex flex-col items-center gap-5">
        <img src="/gnn-image/node-features.jpg" alt="" className="w-[600px] rounded" />
        <p>Visualisasi Node dan Node Features</p>
      </div>
      <p>
        Hubungan antar node dibangun dengan perhitungan k-nearest-neighbor. Node features dari setiap node dihitung terhadap semua node features dari node
        lainnya, dan sembilan node dengan hasil perhitungan terkecil diambil sebagai node tetangga, membentuk sebuah graf.
      </p>
      <div className="my-8 flex flex-wrap items-center justify-center gap-5">
        <div className="flex flex-col items-center gap-5 rounded border-2 border-input p-2">
          <img src="/gnn-image/graph2.1.jpg" alt="" className="h-[400px] rounded" />
          <p>Visualisasi Satu Node Pada Graf</p>
        </div>
        <div className="flex flex-col items-center gap-5 rounded border-2 border-input p-2">
          <img src="/gnn-image/graph2.2.jpg" alt="" className="h-[400px] rounded" />
          <p>Visualisasi Dua Node Pada Graf</p>
        </div>
        <div className="flex flex-col items-center gap-5 rounded border-2 border-input p-2">
          <img src="/gnn-image/graph2.3.jpg" alt="" className="h-[400px] rounded" />
          <p>Visualisasi Tiga Node Pada Graf</p>
        </div>
        <p>
          Node 65 memiliki sembilan tetangga dan salah satu tetangganya adalah node 63. Hal ini menandakan bahwa node 65 dan node 63 memiliki kedekatan nilai
          node feature. Dapat dilihat juga bahwa, node 65 dan node 63 memiliki beberapa node tetangga yang sama, hal ini dikarenakan kedekatan fitur yang
          dimiliki node-node tersebut dengan node terpilih. Node 102 bertetanggaan dengan sembilan node lain yang memiliki kedekatan node feature. Hal ini
          berlaku untuk setiap node yang ada pada gambar, menghasilkan sebuah graf lengkap. Setelah terbentuk graf yang lengkap, maka graf akan memasuki
          lapisan-lapisan <b>graph convolution</b> yang berfungsi untuk menukar informasi antar node dengan mengagregasi fitur-fitur dari node tetangga.
        </p>
      </div>
      <h2 className="mt-8 font-paytone text-4xl">GCN (Graph Convolutional Network)</h2>
      <p className="mt-5">
        <b>GCN</b> merupakan salah satu variasi dalam GNN. Operasi konvolusi pada GCN merupakan hal yang sama dengan proses konvolusi pada CNN (Convolutional
        Neural Network). Pada CNN, input neurons dikali dengan bobot weight yang biasa disebut kernel atau filters. Filters bertindak sebagai jendela yang
        bergeser pada sebuah input gambar, yang memungkinkan CNN untuk mempelajari informasi dari pixel tetangga. Ketika CNN, sebagai contoh, mengidentifikasi
        kasus suatu gambar adalah gambar kucing atau bukan, filters yang sama diaplikasikan pada keseluruhan input gambar untuk mendeteksi input gambar tersebut
        merupakan gambar kucing atau bukan.
      </p>
    </article>
  );
};

export default GNNPage;
