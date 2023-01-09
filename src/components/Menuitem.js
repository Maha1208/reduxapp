import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.style';

const Menuitem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <MenuItemContainer
      size={size}
      onClick={() => navigate(`/${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <ContentContainer className='content'>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default Menuitem;
