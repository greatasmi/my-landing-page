import Image from 'next/image';
import LineButton from '../public/components/LineButton';
import Animate from '../public/components/Animate';
import CountdownTimer from "../public/components/CountdownTimer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 sm:px-8 lg:px-16 py-12 flex flex-col gap-12">
      
      {/* Intro Section */}
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-6 ">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center leading-snug">
          皆さんこんにちは、節約オタクふゆこ。
        </h1>
        <p className="text-base sm:text-lg text-justify">
          日本は過去数十年間で前例のない課題に直面しており...充実した生活を送ることができるかということです。
        </p>
        <p className="text-base sm:text-lg text-justify">
          すべての課題には機会が潜んでいます。賢明な投資によって、私たちは現在の困難に対処し、将来の基盤を築くことができます。
        </p>
        <p className="font-medium text-left">
          私はその信念に基づき、「節約オタクふゆこコミュニティ」を立ち上げました。
        </p>
      </div>

      {/* Benefits Section */}
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-6 ">
        <h2 className="text-xl sm:text-2xl font-semibold text-left">参加すると、次のものが得られます。</h2>
        <p className="list-disc list-inside space-y-2 text-base sm:text-lg">
          <p>✅ 無料の投資コース。</p>
          <p>✅ 10倍成長する銘柄を選ぶ</p>
          <p>✅ 新しいNISAの活用方法を徹底解説</p>
          <p>✅ 2025年上半期に最も買う価値のある株。</p>
          <p>✅ この5銘柄があなたの老後を自由で豊かなものにしてくれます。</p>
          <p>✅ 早期退職を実現するためのアドバイス</p>
        </p>
      </div>

      {/* Highlights Section */}
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
        <p>完全無料ですし、気に入らなかったらいつでもやめられます。</p>
        <p>残り枠はわずかです。大金を稼ぎたいなら、今すぐ参加してください!</p>
        <p>#株式投資 #年金 #交流グループ #経験豊富な投資家 #損をする原因 #投資の知恵 #AI分析 #chatgpt</p>
        <p>すでに5万人以上の参加者がいます。👉👉👉。</p>
        <p>ボタンをクリックするとLINE友だち追加画面に進みます。本サービスは完全無料</p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-6 p-8 ">

  {/* Increased wrapper size */}
  <div className="w-full max-w-2xl">
    <Image
      src="/images/header3.png"
      alt="Header Banner"
      width={800} // increased from 1200
      height={800} // increased from 800
      className="rounded-2xl shadow-xl w-full h-auto object-cover"
      priority
    />
  </div>

  <CountdownTimer />

    {/* Highlights Section */}
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
        <p>「小学三年生の時、彼女 株式投資のキャリアは既にスタートしました」節約オタクふゆこ</p>
      
      </div>

   {/* Image Section */}
   <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-6 p-8 ">

{/* Increased wrapper size */}
<div className="w-full max-w-2xl">
  <Image
    src="/images/1.jpg"
    alt="Header Banner"
    width={800} // increased from 1200
    height={800} // increased from 800
    className="rounded-2xl shadow-xl w-full h-auto object-cover"
    priority
  />
</div>

</div>

 {/* Highlights Section */}
 <div className="w-full max-w-3xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
  <p className="text-left font-bold">
  「桁違いのお金持ちになるためには、株式の所有は避けて通れません」
お金がますます大量に流通している現代、インフレが毎年2％進行することは驚くべきことではありません。これにより、35年で物価が2倍になり、現金の価値は半減すると計算されます。
  </p>
</div>


        {/* Highlights Section */}
 <div className="w-full max-w-3xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
        <p className="text-left font-bold">銀行に預金だけしている人と、効果的に資産運用をしている人との間で、経済格差はどんどん広がっていき、何もせずにいることが大きな機会損失となる時代です。</p>
        </div>

                {/* Highlights Section */}
 <div className="w-full max-w-3xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
        <p className="text-left font-bold">また、株式と仮想通貨の現物には多くの共通点があるため、株式の知識を活かして仮想通貨に参入することは非常に賛成です。今後、仮想通貨が主流になっていくと思われますので、早いうちに学び始めるのが賢明ですね。</p>
        </div>

        {/* Highlights Section */}
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
  <p >
    <span style={{
      color: 'rgb(114, 192, 64)',
      backgroundColor: 'rgb(252, 237, 225)',
      fontSize: '15px'
    }}>
      「秒速で１億円稼ぐ女」節約オタクふゆこ
    </span>
  </p>
</div>



 


 {/* Image Section */}
 <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-6 p-8 ">

{/* Increased wrapper size */}
<div className="w-full max-w-2xl">
  <Image
    src="/images/2.png"
    alt="Header Banner"
    width={800} // increased from 1200
    height={800} // increased from 800
    className="rounded-2xl shadow-xl w-full h-auto object-cover"
    priority
  />
</div>

</div>
 {/* Imported LineButton Component */}
 <LineButton />

{/* Highlights Section */}
<div className="w-full max-w-3xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
  <p className="text-center">※</p> </div>

  {/* Highlights Section */}
  <div className="w-full max-w-3xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
  <p className="text-center font-bold">これまでの配信実績の一部をご覧ください。</p>
</div>




{/* Image Section */}
<div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-6 p-8 ">

{/* Increased wrapper size */}
<div className="w-full max-w-2xl">
  <Image
    src="/images/4.png"
    alt="Header Banner"
    width={800} // increased from 1200
    height={800} // increased from 800
    className="rounded-2xl shadow-xl w-full h-auto object-cover"
    priority
  />
</div>

</div>

<div className="w-full max-w-3xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
  <p className="text-center">厳粛に申し上げますが、料金は一切請求いたしません。</p> </div>

  <div className="w-full max-w-3xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
  <p className="text-center">私の目的は、ただあなたを助け、この火薬を使わない戦争の犠牲者にならないよう支援することにあります。

</p> </div>

<div className="w-full max-w-3xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
  <p className="text-center">最後に、真実をお伝えさせていただきます。
私は、誰かが一夜にして金持ちになる手助けをしたことはありません。それは現実的ではありませんが、多くの方々が正しい方法でお金を稼ぐ術を学べるようサポートしてきました。


</p> </div>

<div className="w-full max-w-3xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
  <p className="text-center">この方法は、すでに20年近くの実績があり、効果が証明されています。そして、あなたも同様にその成功を手にすることができるのです。


</p> </div>

  <div className="w-full max-w-3xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
  <p className="text-center font-bold">会員からの嬉しいお知らせ</p> </div>

 {/* Image Section */}
 <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-6 p-8 ">

{/* Increased wrapper size */}
<div className="w-full max-w-2xl">
  <Image
    src="/images/2.jpg"
    alt="Header Banner"
    width={800} // increased from 1200
    height={800} // increased from 800
    className="rounded-2xl shadow-xl w-full h-auto object-cover"
    priority
  />
</div>

</div>



{/* Image Section */}
<div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6 p-8 ">

{/* Increased wrapper size */}
<div className="w-full max-w-2xl">
  <Image
    src="/images/3.jpg"
    alt="Header Banner"
    width={800} // increased from 1200
    height={800} // increased from 800
    className="rounded-2xl shadow-xl w-full h-auto object-cover"
    priority
  />
</div>

</div>

 {/* Imported LineButton Component */}
 <LineButton />

 <div className="w-full max-w-4xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
  <p className="text-center">※</p> </div>

{/* Image Section */}
<div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6 p-8 ">

{/* Increased wrapper size */}
<div className="w-full max-w-2xl">
  <Image
    src="/images/jlvpfks9pbvtlelz584vsblyulscumchw4w6uopg.png"
    alt="Header Banner"
    width={800} // increased from 1200
    height={800} // increased from 800
    className="rounded-2xl shadow-xl w-full h-auto object-cover"
    priority
  />
</div>

</div>

{/* Image Section */}
<div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6 p-8 ">

{/* Increased wrapper size */}
<div className="w-full max-w-2xl">
  <Image
    src="/images/z4ickgxrtvcefmlfagwzyzionfhfbuhlkefv9axa.png"
    alt="Header Banner"
    width={800} // increased from 1200
    height={800} // increased from 800
    className="rounded-2xl shadow-xl w-full h-auto object-cover"
    priority
  />
</div>

</div>

{/* Image Section */}
<div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6 p-8 ">

{/* Increased wrapper size */}
<div className="w-full max-w-2xl">
  <Image
    src="/images/nv8dgdhdim2lxloavrfa54j4uz5a0awn2zz1qxzg.png"
    alt="Header Banner"
    width={800} // increased from 1200
    height={800} // increased from 800
    className="rounded-2xl shadow-xl w-full h-auto object-cover"
    priority
  />
</div>

</div>

 {/* Imported LineButton Component */}
 <LineButton />

 <div className="w-full max-w-4xl mx-auto flex flex-col gap-3 p-6  text-base sm:text-lg">
  <p className="text-center">※</p> </div>
 {/* Image Section */}
 <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6 p-8 ">

{/* Increased wrapper size */}
<div className="w-full max-w-2xl">
  <Image
    src="/images/p4mvibmcg1oxbc5ocgq8ckobbj2tlczl5h0wjug3.png"
    alt="Header Banner"
    width={800} // increased from 1200
    height={800} // increased from 800
    className="rounded-2xl shadow-xl w-full h-auto object-cover"
    priority
  />
</div>

</div>



 <Animate />
{/* Image Section */}
<div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6 p-8 ">

{/* Increased wrapper size */}
<div className="w-full max-w-2xl">
  <Image
    src="/images/vh12v3hzbx60dznizztbcnbnwur6dh0s79tzkzgv.png"
    alt="Header Banner"
    width={800} // increased from 1200
    height={800} // increased from 800
    className="rounded-2xl shadow-xl w-full h-auto object-cover"
    priority
  />
</div>

</div>

</div>

     
    </main>
  );
}
