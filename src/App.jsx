import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

const Footer = () => {
  return (
    <footer>
      <span>Created with 💗</span>
      <a
        href='https://github.com/Montu-Gohain/GDrive-downloadable-ilnk-generator'
        target='_blank'>
        <span>Source Code</span>
      </a>
    </footer>
  );
};

function App() {
  const [link, setLink] = useState("");
  const [got, setGot] = useState(null);
  const [copied, setCopied] = useState(false);
  const generateLink = () => {
    let downloadLink;
    if (link.length < 1) return alert("Please enter the link.");
    let newLink = link.substring(32).split("/")[0];
    downloadLink = `https://drive.google.com/uc?export=download&id=${newLink}`;
    setGot(downloadLink);
  };

  return (
    <div className='main-container'>
      <h1>Paste your google Drive link</h1>
      <input
        type='text'
        className='input-box'
        onChange={(e) => setLink(e.target.value)}
      />
      <button className='generate-btn' onClick={generateLink}>
        Generate Link
      </button>
      <section style={{ marginTop: "20px" }}>
        {got ? (
          <CopyToClipboard text={got} onCopy={() => setCopied(true)}>
            <span className='copy-btn'>Copy download link</span>
          </CopyToClipboard>
        ) : null}
      </section>
      {copied && (
        <h5 style={{ color: "red", fontSize: "large" }}>Link Copied 🖖</h5>
      )}
      <Footer />
    </div>
  );
}

export default App;
