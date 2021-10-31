import React from 'react';
import { properties } from '../properties.js';
import Box from '@mui/material/Box';

const Introbar = () => {
  return (
    <Box
      className="App-intro"
      id="introBar"
      sx={{ backgroundColor: 'secondary.lighter', color: 'primary.lighter' }}
    >
      <h5 style={{ fontWeight: 'bold', marginBottom: '20px' }}>
        {properties.intro}
      </h5>
      <p
        style={{
          fontSize: '20px',
          fontWeight: 'normal',
          width: '800px',
          textAlign: 'center',
        }}
      >
        {/* An avid learner who loves to explore new technologies. Interested in
        problem solving, building new stuffs and making my life easier with bits
        of code and automation. In the span of my 2+ yrs of professional career,
        I have experience on working in the FinTech industry and for offshore
        clients. I have an assortment of experience for a career so short (till
        now) where I had the opportunity to build my expertise on requirement
        engineering, designing scalable system, and of course - adapting to new
        technologies right away! I learn from my failures and that's where my
        interest in research comes from. */}
        {/* {properties.introParagraph} */}
        In a childhood filled with world classics and fictions, I was intrigued
        when I finally got my hands on a scifi novelette I still treasure - The
        Bicentennial Man by Isaac Asimov. <br />
        Children want to be a lot of things when they grow up, and I was no
        exception; I had a hard time choosing my career between a wide range
        from an ice cream seller to an astronaut. <br />
        At the end of high school, I finally knew what I wanted to be - a
        researcher in the Computer Science field; because well, that's where the
        fiction in science truly takes place. <br />
        From making simplistic robots in my undergrad years to building industry
        grade applications in my current professional career, I aspire to make a
        dent in the technology sphere with my research and creativity.
      </p>
    </Box>
  );
};

export default Introbar;
