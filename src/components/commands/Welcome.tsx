import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
    __   _              ___  _ __            
   / /  (_)__ ___ _    / _ \\(_) /__ ___  ___ 
  / /__/ / _ \`/  ' \\  / ___/ / (_-</ _ \\/ _ \\
 /____/_/\\_,_/_/_/_/ /_/  /_/_/___/\\___/_//_/  
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    __   _             
   / /  (_)__ ___ _    
  / /__/ / _ \`/  ' \\  
 /____/_/\\_,_/_/_/_/  
     ___  _ __              
    / _ \\(_) /__ ___  ___   
   / ___/ / (_-</ _ \\/ _ \\  
  /_/  /_/_/___/\\___/_//_/  
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my personal website. (Version 1.3.1k)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/karmalover-ca/website" target="_blank">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type "<Cmd>help</Cmd>".
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                              ****  #       
                      ##########****##      
                  ##############*****#     
                ##################****#    
              ##################********** 
            ##################****####**#  
            #######**#################****# 
          ################**#########****##
          ############################****##
          #############################***  
          #####**######*################*   
          ##################*##########     
          ######################*#####      
            ########################        
              #################                            
          `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
