import {  useState } from 'react';
import './App.css';
import NavbarH from './Components/navbar.tsx';
import BannerList from './Components/bannerList';
import InstaTemplate from './Components/instagramTemplate.tsx';
import TwitterTemplate from './Components/twitterTemplate.tsx';
import StoryTemplate from './Components/storyTemplate.tsx';
import TextGenerator from './Components/textGenerate.tsx';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode !== null ? JSON.parse(storedDarkMode) : false;
  });
  function toggleDarkMode() {
    setDarkMode((prevMode: boolean) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  }
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null); 

  function refreshPage(){
    window.location.reload();
  }
  return (
    <div className = 'bg-secondary text-light'>
      <NavbarH darkMode={darkMode} toggleDarkMode={toggleDarkMode} refreshPage={refreshPage}/>
      {selectedTemplate === 'Instagram Post' ? (
      <InstaTemplate darkMode={darkMode} refreshPage={refreshPage}/>
      ) : selectedTemplate === 'Twitter Post' ? (
      <TwitterTemplate darkMode={darkMode} refreshPage={refreshPage}/>
      ) : selectedTemplate === 'Story Post' ? (
      <StoryTemplate darkMode={darkMode} refreshPage={refreshPage}/>
      ) : selectedTemplate === 'Text generate'? (
      <TextGenerator darkMode={darkMode} refreshPage = {refreshPage}/>
      ) : (
      <BannerList darkMode={darkMode} setSelectedTemplate={setSelectedTemplate} />
      )}
    </div>
  );
}
export default App;
