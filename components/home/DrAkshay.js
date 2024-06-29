import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";
import { Card, Link } from "@mui/material";
import Heading from "./Heading";
import { headList3, headList4 } from "../Constant/titlefile";
import { StyledButton } from "../styled-button";

const DrAkshay = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };
  const Lists = motion(List);
  const ListItems = motion(ListItem);
  const explist = [
'12+ Years of experience',
'Experienced Endodontist',
' Former Assistant Professor',
'Specialized in Endodontics and Cosmetic Dentistry',
'Committed to Excellence',
'Indian Endodontics Society',

  ];
  const explist1 = [
'10+ Years of experience',
'Experienced Orthodontist',
'Government Dental College Alumni',
'Specialized in Invisalign and Advanced Orthodontic Techniques',
'Committed to Ongoing Education and Excellence',
'Former Assistant Professor',
  ];
  const explist2 = [
'14+ Years of experience',
'Experienced Oral & Maxillofacial Surgeon',
'Government Dental College Alumni',
'Specialized in Minor Oral Surgeries, Implantology, and Maxillofacial Trauma',
'Committed to Excellence and Continued Education',
'Dedicated to Providing Comprehensive Care',
  ]

  return (
    <Box id='Doctors' sx={{ py: { xs: 7, md: 5 }, backgroundColor: "background.paper" }}>
      <Container>
       <Heading data={headList4}></Heading>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >

            
              <Grid item xs={12} sm={4}>
                <Box sx={{p:3}}>
                <Image
                  src="/images/dr/dr14.jpeg"
                  alt="Dr. Jalpa Tank, Founder of HSR Dental Booth"
                  width={300}
                  height={300}
                  // layout="responsive"
                  style={{
                    width: '100%', height: '100%',
                     boxShadow:
                      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                  }}
                />
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box sx={{ px: 1 }}>
               
                  < Typography 
                  component="h1"
                    sx={{
                      fontWeight: 700,
                      marginBottom: "5px",
                      fontSize: "30px",
                      color:"primary.main",
                    }}
                  >
                    
                    Dr. Jalpa Tank

                  </Typography>
                 

                  {/* {messages['dashboard.analytics.eddieMassy']} */}
                  <Typography
                    sx={{
                      color: "text.primary",
                      lineHeight: 1.5,
                      marginBottom: 2.5,
                      fontSize: 17,
                      textAlign: "justify",
                      mt: 2

                    }}
                  >
                  Meet Dr. Jalpa, the Founder of HSR Dental Booth in Bangalore. With over 12 years of experience in dentistry, Dr. Jalpa completed her MDS in Conservative Dentistry and Endodontics from CSMSS Dental College, Aurangabad. She specializes in single visit root canals, retreatment of failed root canal treatments, smile designing, and teeth whitening. If you're searching for a skilled dentist in HSR Layout, Dr. Jalpa is your trusted professional. She is dedicated to providing comprehensive dental solutions tailored to your needs.


                  </Typography>
                  <List sx={{ mt: -2, mb: 2 }}>
              {explist.map((item, i) => (
                <ListItem
                  key={item}
                >
                  <StarIcon sx={{ fontSize: 16, marginRight: 2, color: 'primary.dark' }} />
                  {item}
                </ListItem>
              ))}
            </List>
<Box sx={{textAlign:'left'}}>
            <StyledButton color="primary"  size="large" variant="contained" >
                <a
                  href="https://www.practo.com/bangalore/doctor/dr-jalpa-tank-1-dentist"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Book An Appointment{" "}
                </a>
              </StyledButton>
              </Box>
                </Box>
              </Grid>
            {/* </Card> */}


           
              <Grid item xs={12} sm={8} order={{xs:1,md:0}}>
                <Box sx={{ px: 1 }}>
                < Typography 
                  component="h1"
                    sx={{
                      fontWeight: 700,
                      marginBottom: "5px",
                      fontSize: "30px",
                      color:"primary.main",
                    }}
                  >
                    {" "}
                    Dr. Sushma

                  </Typography>
                  

                  {/* {messages['dashboard.analytics.eddieMassy']} */}
                  <Typography
                    sx={{
                      color: "text.primary",
                      lineHeight: 1.5,
                      marginBottom: 2.5,
                      fontSize: 17,
                      textAlign: "justify",
                      mt: 2

                    }}
                  >
                  Meet Dr. Sushma, a dedicated orthodontist with a wealth of experience in crafting beautiful smiles and promoting overall oral health. She completed her Bachelor of Dental Surgery (BDS) from Government Dental College, Chennai, and pursued advanced training, earning a Master of Dental Surgery (MDS) in Orthodontics from Manipal College of Dental Sciences, Manipal.

                  </Typography>
                  <List sx={{ mt: -2, mb: 2 }}>
              {explist1.map((item, i) => (
                <ListItem
                  key={item}
                >
                  <StarIcon sx={{ fontSize: 16, marginRight: 2, color: 'primary.dark' }} />
                  {item}
                </ListItem>
              ))}
            </List>

            <Box sx={{textAlign:'left'}}>
            <StyledButton color="primary"  size="large" variant="contained" >
                <a
                  href="https://www.practo.com/bangalore/clinic/hsr-dental-booth-a-multispeciality-dental-clinic-hsr-layout"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Book An Appointment{" "}
                </a>
              </StyledButton>
              </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} order={{xs:0,md:1}}>
              <Box sx={{p:3}}>

                <Image
                  src="/images/dr/dr11.jpeg"
                  alt=" Experienced Orthodontist at HSR Dental Booth"
                  width={300}
                  height={300}
                  // layout="responsive"
                  style={{
                    width: '100%', height: '100%',
                     boxShadow:
                      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                  }}
                />
                </Box>
              </Grid>
</Grid>

<Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
            <Grid item xs={12} sm={4}>
                <Box sx={{p:3}}>
                <Image
                  src="/images/dr/dr15.jpeg"
                  alt="Dr. Kaushik Pai S H, Consultant Craniofacial & Maxillofacial Surgeon"
                  width={300}
                  height={300}
                  // layout="responsive"
                  style={{
                    width: '100%', height: '100%',
                     boxShadow:
                      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                  }}
                />
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box sx={{ px: 1 }}>
               
                  < Typography 
                  component="h1"
                    sx={{
                      fontWeight: 700,
                      marginBottom: "5px",
                      fontSize: "30px",
                      color:"primary.main",
                    }}
                  >
                    
                    Dr. Kaushik Pai S H

                  </Typography>
                 

                  {/* {messages['dashboard.analytics.eddieMassy']} */}
                  <Typography
                    sx={{
                      color: "text.primary",
                      lineHeight: 1.5,
                      marginBottom: 2.5,
                      fontSize: 17,
                      textAlign: "justify",
                      mt: 2

                    }}
                  >
                 Meet Dr. Kaushik Pai S H, Consultant Craniofacial & Maxillofacial Surgeon, and Implantologist at HSR Dental Booth. With over 14 years of experience, Dr. Kaushik specializes in minor oral surgeries, implantology, maxillofacial trauma, and corrective procedures. He also completed his Post Doctoral Fellowship in Craniofacial & Facial Cosmetic Surgery at Mazumdar Shaw Medical Centre, Bangalore. Dr. Kaushik is dedicated to delivering exceptional surgical care with precision and expertise.



                  </Typography>
                  <List sx={{ mt: -2, mb: 2 }}>
              {explist2.map((item, i) => (
                <ListItem
                  key={item}
                >
                  <StarIcon sx={{ fontSize: 16, marginRight: 2, color: 'primary.dark' }} />
                  {item}
                </ListItem>
              ))}
            </List>
<Box sx={{textAlign:'left'}}>
            <StyledButton color="primary"  size="large" variant="contained" >
                <a
                  href="https://www.practo.com/bangalore/clinic/hsr-dental-booth-a-multispeciality-dental-clinic-hsr-layout"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Book An Appointment{" "}
                </a>
              </StyledButton>
              </Box>
                </Box>
              </Grid>
              
            </Grid>
            {/* </Card> */}


        <br></br>
        <br></br>
        {/* <Grid
          container
          spacing={7}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="flip-card"
              sx={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              {/* <div class="flip-card"> *
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  {/* <CardMedia
                    component="img"
                    height="100%"
                    image="/images/dr/dr013.jpg"
                    alt="green iguana"
                  /> *
                  <img
                    src="/images/dr/dr013.jpg"
                    alt="Avatar"
                    style={{ width: "100%", height: "400px" }}
                  />
                  {/* <CardContent> *
                  <Typography gutterBottom variant="h5" component="div">
                    <h4
                      style={{
                        fontWeight: 700,
                        marginBottom: "5px",
                        fontSize: "18px",
                        color: "#555555",
                      }}
                    >
                      {" "}
                      Dr. Anuj Mishra
                    </h4>
                    <span>Dental Surgeon and Implantologist</span>
                    <br></br>
                    Experience: 10+ Years
                  </Typography>

                  {/* </CardContent> *
                </div>
                <div class="flip-card-back" style={{ padding: 15 }}>
                  <h4
                    style={{
                      fontWeight: "400",
                      textAlign: "justify",
                    }}
                  >
                    Dr. Anuj Mishra brings over a decade of expertise in
                    transforming smiles and restoring oral health. As a
                    dedicated dental surgeon and implantologist, he specializes
                    in a range of advanced treatments, including Full Mouth
                    Rehabilitation, Smile Designing, Dental Implants, Complete &
                    Partial Dentures, Laminated & Veneers, Root Canal, Crown &
                    Bridges, and various other dental procedures. With a
                    commitment to excellence and a patient-centric approach, Dr.
                    Anuj ensures each individual receives personalized care and
                    achieves optimal oral wellness.
                  </h4>
                </div>
              </div>
              {/* </div> *
            </Card>
            {/* <Card sx={{ background: '#f0fafa', boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' }}>
              {/* <CardActionArea> *
              <CardMedia
                component="img"
                height="100%"
                image="/images/dr/dr013.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h4 style={{
                    fontWeight: 700,
                    marginBottom: '5px',
                    fontSize: '18px',
                    color: '#555555'
                  }}>  Dr. Anuj Mishra</h4>
                  {/* <span>Chief Medical Officer</span> *
                </Typography>

              </CardContent>
              {/* </CardActionArea> *
            </Card> *
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="flip-card"
              sx={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              {/* <div class="flip-card"> *
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  {/* <CardMedia
                    component="img"
                    height="100%"
                    image="/images/dr/dr013.jpg"
                    alt="green iguana"
                  /> *
                  <img
                    src="/images/dr/dr02.jpg"
                    alt="Avatar"
                    style={{ width: "100%", height: "400px" }}
                  />
                  {/* <CardContent> *
                  <Typography gutterBottom variant="h5" component="div">
                    <h4
                      style={{
                        fontWeight: 700,
                        marginBottom: "5px",
                        fontSize: "18px",
                        color: "#555555",
                      }}
                    >
                      {" "}
                      Dr. Shweta Mishra
                    </h4>
                    <span>Dental Surgeon</span>
                    <br></br>
                    Experience: 8+ Years
                  </Typography>

                  {/* </CardContent> *
                </div>
                <div class="flip-card-back" style={{ padding: 15 }}>
                  <h4
                    style={{
                      fontWeight: "400",
                      textAlign: "justify",
                    }}
                  >
                    Meet Dr. Shweta Mishra, a skilled Dental Surgeon with over eight years of experience in delivering exceptional dental care. Specializing in Root Canal, Crown & Bridges, Cosmetic Dentistry, and a range of other dental treatments, Dr. Shweta is dedicated to enhancing smiles and restoring dental function. Her compassionate approach and commitment to patient comfort ensure that each individual receives personalized care tailored to their unique needs. Trust Dr. Shweta for top-notch dental solutions and a brighter, healthier smile.


                  </h4>
                </div>
              </div>
              {/* </div> *
            </Card>

            {/*           
            <List sx={{ mt: -2, mb: 2 }}>
              {explist.map((item, i) => (
                <ListItem
                  key={item}
                >
                  <FileDownloadDoneIcon sx={{ fontSize: 18, marginRight: 1, color: '#49caeb' }} />
                  {item}
                </ListItem>
              ))}
            </List> *
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
};
export default DrAkshay;
