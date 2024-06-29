import React from 'react';
import Image from 'next/legacy/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const MentorCardItem = ({ item }) => {
  return (<Box>

    <section id="testimonials" class="testimonials" style={{padding:4}}>
      <div class="testimonial-item">
        <p>
          {/* <p class='ps'> */}

          {item.description}
          <br></br>


        </p>
        {/* <input type="checkbox" class="check" /> */}
        {/* <Image src={item.photo} width={100} height={100} className="testimonial-img" alt={'Mentor ' + item.id} /> */}
        <img src={item.photo} class="testimonial-img" alt="" />

        <h3>{item.name}</h3>
        {/* <h4>Designer</h4> */}
      </div>
    </section>
  </Box>);
};
export default MentorCardItem;
