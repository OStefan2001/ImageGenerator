import insta from '/src/assets/instagram-post.jpg';
import twitter from '/src/assets/twitter-post.jpg';
import story from '/src/assets/story-post.jpg';
import textGen from '/src/assets/text-post.jpg'
import BannerType from './bannerType';
import '/src/Styles/bannerList.css';
interface BannerData {
  id:number;
  typeImg: string;
  cardTitle: string;
  cardText: string;
  dimension: string;
  buttonText: string;
  
}

interface BannerListProps {
  darkMode: boolean;
  setSelectedTemplate: (cardTitle: string) => void;
}

const BannerList: React.FC<BannerListProps> = ({ darkMode ,setSelectedTemplate}) => {
  const bannerData: BannerData[] = [
    {
      id:1,
      typeImg: insta,
      cardTitle: 'Instagram Post',
      cardText: 'Instagram ads using AI Generator!',
      dimension:'500 x 500 px',
      buttonText: 'Generate',
    },
    {
      id:2,
      typeImg: twitter,
      cardTitle: 'Twitter Post',
      cardText: 'Twitter header using AI Generator!',
      dimension:'1500 x 500 px',
      buttonText: 'Generate',
      
    },
    {
      id:3,
      typeImg: story,
      cardTitle: 'Story Post',
      cardText: 'SStory post using AI Generator!',
      dimension:'1080 x 1920 px',
      buttonText: 'Generate',
    },
    {
      id:4,
      typeImg:textGen,
      cardTitle: 'Text generate',
      cardText: 'Generate text based on your image!',
      dimension:'text',
      buttonText: 'Generate',
    },
  ]

  return (
    <>
      <div className="container py-3">
          <h2>Choose your template</h2>
          <div className="d-flex justify-content-center flex-wrap text-center row">
            {bannerData.map((item) => (
              <div key={item.id} className="col-md-3 mb-3" >
                <BannerType
                  darkMode={darkMode}
                  typeImg={item.typeImg}
                  cardTitle={item.cardTitle}
                  cardText={item.cardText}
                  dimension={item.dimension}
                  buttonText={item.buttonText}
                  onButtonClick={setSelectedTemplate}
                />
              </div>
            ))}
          </div>
      </div>
    </>
  );
};

export default BannerList;
