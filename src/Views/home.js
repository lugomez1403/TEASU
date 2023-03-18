import React from 'react';
import '../App.css';
import styled, { keyframes } from "styled-components";

const Home = () => {
    const credits = keyframes`
    0%{
      transform: translateY(-200%);
    }
  
    100%{
      transform: translateY(0%);
    }
  `;

    const AnimatedBackground = styled.div`
    background: black;
    height: 100vh;
    width: 100%;
    box-sizing: content-box;
    animation: ${credits} 30s linear infinite;
    display: flex;
    flex-flow: row wrap;
  `;

    const Div = styled.div`
    overflow: hidden;
    z-index: -1;
  `;

    const Background = styled.span`
    width: 100%;
    height: 100%;
    background-color: ${({ items }) => (items === "1" ? "red" : "blue")};
    background-image: url(${({ items }) =>
            items === "1"
                ? "trabajos.jpeg"
                : "jobs.jpeg"});
  `;
    return (
        <React.Fragment>
            <Div>
                <AnimatedBackground>
                    <Background items="1"></Background>
                    <Background items="2"></Background>
                    <Background items="1"></Background>
                    <Background />
                </AnimatedBackground>
            </Div>
            <div className="plugin---file-cover---1">
                <div className="_123">
                    <div className="group-10">
                    </div>
                    <div className="rectangle-26"></div>

                    <div className="group-13">
                        <div className="expertos-en-mec-nica-de-suelos">
                            Expertos en mecánica de suelos
                        </div>
                    </div>

                    <div className="rectangle-16"></div>

                    <img
                        className="whatsapp-image-2023-02-18-at-11-35-1"
                        src="whatsapp-image-2023-02-18-at-11-35-1.png"
                    />

                    <img className="image-1" src="image1.png" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;