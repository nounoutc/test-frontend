"use client";

import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  display: inline-block;
  position: relative;
  margin-bottom: 20px;
  text-transform: uppercase;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 50%;
    height: 4px;
    background-color: red;
  }
`;

export const HeaderWrapper = styled.header`
  background-color: #f4f4f4;
  padding: 40px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
  max-width: 930px;
  margin-left: auto;
  margin-right: auto;
  line-height: 26px;
`;

export const SectionWrapper = styled.section`
  margin: 40px 20px;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
`;

export const CardWrapper = styled.div`
  background: #CECECE;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 320px;
  min-height: 220px;
  position: relative;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

export const SubscribeButton = styled.button<{ isSubscribed: boolean }>`
  background: ${(props) => (props.isSubscribed ? "#B00005" : "#FAEC70" )};
  color: ${(props) => (props.isSubscribed ? "white" : "black"  )};
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: auto;

  &:hover {
    opacity: 0.9;
  }
`;
