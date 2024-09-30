import React from 'react';
import { Section } from 'react-fullpage';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.div`
    &.first{
        padding-top: 51px;
    }

    display: flex;
    flex-wrap: wrap;

    .item {
      width: 0;
      flex-grow: 1;
      margin: 20px 0;
    }

    .item + .item {
      margin-left: 20px;
    }
  }
`;


const Experience = () => {
  return (
    <Section>
      <Wrapper className='layout-width frist'>
        <Item title="EDUCATION">

        </Item>
        <Item title="WORK EXPERIENCE">

        </Item>
        <Wrapper className='layout-width'>
        <Item title="CERTIFICATE">

</Item>
<Item title="SKILL">

        </Item>
            </Wrapper>
      </Wrapper>
    </Section>
  );
};

export default React.memo(Experience);