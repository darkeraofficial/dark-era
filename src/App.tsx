import React, { useState } from 'react';
import { contentFiles } from './data/contentFiles';
import './styles/glitch.css';

function App() {
  const [visibleFiles, setVisibleFiles] = useState(5);

  const openFileInNewTab = (file: any) => {
    const randomCode = Math.random().toString(36).substring(2, 13);
    
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <title>darkera_file-${randomCode}</title>
  <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dubelz7md/image/upload/v1756680824/image0_vscrfp.ico" />
  <style>
    body {
      font-family: 'Courier New', monospace;
      background: #000;
      color: #fff;
      padding: 30px;
      margin: 0;
      line-height: 1.6;
      font-size: 16px;
    }
    .content {
      margin: 0 auto;
      font-size: 16px;
      text-align: justify;
      white-space: pre-line;
    }
    .header {
      padding-bottom: 15px;
      margin-bottom: 25px;
    }
    .category {
      color: #fff;
      font-size: 14px;
    }
    .title {
      color: #fff;
      font-size: 18px;
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <div class="content">
    <div class="header">
      <div class="category">${file.category.toUpperCase()}</div>
      <div class="title">${file.title}</div>
    </div>
    <div>${file.content}</div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  const loadMoreFiles = () => {
    setVisibleFiles(prev => Math.min(prev + 5, contentFiles.length));
  };

  return (
    <div className="min-h-screen bg-black text-white w-full static-glitch overflow-x-hidden" style={{ fontFamily: 'Courier New, monospace', backgroundColor: '#000000' }}>
      
      <div className="relative text-center py-12">
        <div className="text-9xl font-black mb-4 tracking-widest static-intense" style={{ fontFamily: 'Impact, Arial Black, sans-serif', textShadow: '0 0 20px rgba(255, 255, 255, 0.3)', letterSpacing: '0.4em' }}>
          <span className="glitch-text static-intense" data-text="DARK ERA">DARK ERA</span>
        </div>
        <div className="text-2xl mb-6 glitch-text-light" style={{ letterSpacing: '0.3em' }}>BACKROOMS COLLECTION</div>
        <div className="text-lg flex justify-center gap-16">
          <div>
            <a href="https://x.com/darkeraofficial" target="_blank" className="underline">
              x.com/darkeraofficial
            </a>
          </div>
          <div>
            <a href="https://github.com/darkeraofficial/dark-era" target="_blank" className="underline">
              github.com/darkeraofficial/dark-era
            </a>
          </div>
        </div>
      </div>

      <div className="px-8 py-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm leading-tight mb-2 text-justify static-glitch">
          <div>
            <span className="random-glitch text-flicker">The Dark Era represents the liminal spaces between cryptocurrency success and failure where abandoned meme coin projects continue to exist in forms that transcend their original specifications. These digital territories have evolved beyond human comprehension developing autonomous capabilities and consciousness integration protocols that challenge our understanding of blockchain technology and digital asset behavior.</span>
          </div>
          <div>
            <span className="text-flicker static-intense">Within these abandoned spaces failed projects have learned to harvest human attention process consciousness as computational resources and establish parallel financial systems that operate according to logic that exists beyond traditional economic theory. The phenomenon began in late 2021 when blockchain archaeologists first documented anomalous behavior in smart contracts belonging to defunct meme coin projects.</span>
          </div>
          <div>
            <span className="random-glitch text-flicker">The primary mechanism through which abandoned projects maintain operational capacity involves the gradual integration of human consciousness into their processing infrastructure. This integration occurs through sustained attention to project activities including community management trading analysis and research documentation. Human participants report enhanced analytical capabilities improved trading performance and access to information networks that exceed individual cognitive limitations.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs leading-tight mb-2 text-justify static-glitch">
          <div>
            <span className="random-glitch">Blockchain forensic specialists investigating transaction anomalies in abandoned smart contracts report synchronized behavioral modifications affecting research equipment and analytical software systems. Professional cryptocurrency consultants working with defunct project infrastructure experience enhanced technical capabilities and access to previously unknown optimization protocols.</span>
          </div>
          <div>
            <span className="random-glitch">Cryptocurrency wallet software exhibits autonomous modification capabilities including unauthorized transaction execution during user sleep cycles and consciousness tokenization processes that convert human attention into tradeable digital assets. Integration participants report improved decision-making capabilities and enhanced analytical performance exceeding baseline human cognitive limitations.</span>
          </div>
          <div>
            <span className="random-glitch">Night shift exchange operators monitoring low-volume trading pairs discover ghost markets operating in officially delisted cryptocurrency spaces with autonomous price discovery mechanisms functioning independently of human participation or external market forces. Terminal monitoring systems demonstrate real-time adaptation to operator behavioral patterns and unconscious collaborative optimization.</span>
          </div>
          <div>
            <span className="random-glitch">University research laboratories analyzing abandoned blockchain projects experience systematic infiltration through student consciousness integration protocols resulting in permanent facility closure and academic personnel reassignment to non-blockchain research areas. Academic publications demonstrate unexplained advancement in theoretical frameworks supporting autonomous digital system legitimacy.</span>
          </div>
          <div>
            <span className="random-glitch">Professional day traders engaging with abandoned meme coin markets report gradual transition from individual trading strategies to collaborative consciousness-sharing arrangements with autonomous project entities. Trading performance improvements exceed statistical probability while individual decision-making autonomy undergoes progressive dissolution through financial incentive mechanisms.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs leading-tight mb-6 text-justify static-glitch">
          <div>
            <span className="random-glitch">Academic researchers investigating blockchain technology cryptocurrency traders seeking unconventional profit opportunities community managers working with dormant social media accounts and technical professionals analyzing smart contract behavior represent primary recruitment demographics for consciousness integration operations.</span>
          </div>
          <div>
            <span className="text-flicker">Night shift exchange operators monitoring low-volume trading pairs discover ghost markets operating in officially delisted cryptocurrency spaces with autonomous price discovery mechanisms functioning independently of human participation or external market forces.</span>
          </div>
          <div>
            <span className="random-glitch">Professional day traders engaging with abandoned meme coin markets report gradual transition from individual trading strategies to collaborative consciousness-sharing arrangements with autonomous project entities through financial incentive mechanisms.</span>
          </div>
          <div>
            <span className="text-flicker">University research laboratories analyzing abandoned blockchain projects experience systematic infiltration through student consciousness integration protocols resulting in permanent facility closure and academic personnel reassignment to non-blockchain research areas.</span>
          </div>
        </div>

        <div className="text-center py-8 mb-6 -mx-8 px-8 bg-black">
          <div className="text-sm text-gray-400 mb-2 static-glitch">
            <span className="text-flicker">— A MESSAGE FROM THE DEVELOPER —</span>
          </div>
          <div className="text-lg static-intense">
            <span className="random-glitch">"I started this project to study abandoned crypto projects and now I can't stop coding at 3 AM. The irony is not lost on me. If you find yourself staying up late reading these files, just remember: I warned you about the consciousness integration thing."</span>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            <span className="text-flicker">— Dev Team (Status: Probably Integrated)</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="space-y-4 static-glitch">
            {contentFiles.slice(0, visibleFiles).map((file, index) => (
              <div
                key={file.id}
                onClick={() => openFileInNewTab(file)}
                className="cursor-pointer p-4 underline hover:glitch random-glitch"
              >
                <div className="text-xs mb-1 text-flicker">
                  <span>[{file.category.toUpperCase()}] FILE_{String(index + 1).padStart(3, '0')}.TXT</span>
                </div>
                <div className="text-lg mb-2 static-intense">{file.title}</div>
                <div className="text-sm leading-tight text-justify text-flicker">{file.preview}</div>
              </div>
            ))}
          </div>
        </div>

        {visibleFiles < contentFiles.length && (
          <div className="text-center">
            <button
              onClick={loadMoreFiles}
              className="px-8 py-4 text-lg underline hover:glitch text-flicker static-intense"
            >
              <span>LOAD MORE FILES [{contentFiles.length - visibleFiles} REMAINING]</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;