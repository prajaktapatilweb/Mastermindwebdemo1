import React from 'react'
import DetailBlog from './DetailBlog'
import { Link } from '@mui/material'

export default function Blog1DentalImplant() {
    var DetailObject = [
        {
            type: 'title',
            text: ' Dental Implants: An Ancient Treatment Redefined by Modern Technology',
        },
        {
            type: 'images',
            img: '/images/blog/img1.jpg'
        },
        {
            type: 'subtitle',
            text:
                'History',

        },
        {
            type: 'para',
            text: [

                'Tooth loss has been a problem since ancient times as the skeletal remains of Egyptian mummies suggest. And because of the curious mind of the human race, there have been numerous attempts and experiments to replace those missing teeth with a wide variety of materials.',
                'There have been attempts to place animal teeth or bone or healthy teeth of one human being to another with expected failures. Up until the late 1960s, all attempts to place any materials in the jaw to support the teeth were hardly successful. Then came the accidental discovery by Professor Branemark, an orthopaedic surgeon when he placed a titanium rod in rabbit’s feet, and when he tried to remove it, to his surprise he found out intermingling of bone and titanium surface. This indicated the complete acceptance of titanium by bone, giving it rock-solid stability. Professor Branemark called this phenomenon “Osseointegration”.',
            ]
        },
        {
            type: 'subtitle',
            text: 'New Age Dental Implant Solution',
        },
        {
            type: 'para',
            text: [
                'Modern-day implantology is completely based and works on the principal osseointegration. Over the past few decades, various materials have been tried for their osseointegration potential. Pure titanium, titanium alloys, zirconium, and tantalum are the few which have shown great potential. Currently, the most used materials for implants are titanium and titanium alloys.',
                'With the research of the last few decades, implant procedures have become very sophisticated and predictable. Newer tools have made procedures painless during and after the procedures.',
            ]
        },
        {

            type: 'images',
            img: '/images/blog/img2.jpg'

        },
        {
            type: 'subtitle',
            text:

                'Traditional v/s Modern',
        },
        {
            type: 'para',
            text: [


                'Traditionally removable dentures and bridges were used for replacing missing teeth, both these options came with their own shortcomings. Dentures are removable kinds of teeth that offer reduced chewing efficiency, require continuous repairs, and have a relatively short life. Bridges are fixed teeth made with the support of adjacent healthy teeth. Though bridges have relatively better chewing efficiency, they require grinding of adjacent healthy teeth, sometimes which may need root canal treatment. ',
                'In the long term, due to the failure of natural teeth, the bridge can fail. Bridges are not always possible like in cases where remaining teeth are not strong.',
                'Unlike the above two methods, implants are independent of adjacent teeth and do not usually require any alteration of healthy teeth. Before implant placement, a dental practitioner generally conducts a thorough examination of the oral cavity and will study the patient’s medical history and some blood tests. Apart from the 3D radiologic examination, a CBCT scan is done to measure the exact dimensions of available bone. As per the evaluation, implant sizes, number of implants required, and sites are decided.',
            ]
        },
        {
            type: 'subtitle',
            text: 'The Process of Dental Implant Placement',
        },
        {

            type: 'images',
            img: '/images/blog/img3.jpg'

        },

        {
            type: 'para',
            text: ['The first phase of treatment starts with implant placement, from here treatment can go in two directions:']
        },

        {
            type: 'para',
            text: [<span style={{ fontSize: '20px' }}> <b>1. Implant placement and immediate loading</b></span>]
        },
        {
            type: 'para',
            text: [' In this method, once the implant placement is done, impressions (measurements) are made and then they are sent to the laboratory for fabrication of prosthesis (teeth). After 4-7 days, teeth are fixed on the implants.'
            ]
        },
        {
            type: 'para',
            text: [<span style={{ fontSize: '20px' }}> <b>2. Implant placement and delayed loading</b></span>
            ]
        },
        {
            type: 'para',
            text: [' In this method, after the implant placement, the site is closed with sutures (stitches). The implant site is allowed to heal undisturbed and it is re-entered after 2-4 months. At this time, a screw is fixed on top of implants known as gingival former for shaping gums. This is followed by impressions (measurement) and prosthesis (teeth) fixing.'],
        },
        {
            type: 'subtitle',
            text: 'The dental implant can be of various materials like:',
        },
        {
            type: 'items',
            text: [
                'Metal (Nickel-chromium or cobalt-chromium)',
                'Metal ceramic',
                'Zirconia',
                'Acrylic',
                'Peek polymer (Poly ethyl ethyl ketone)',
                'Composite resin',


            ]
        },
        {
            type: 'subtitle',
            text: 'Factors determining the success of implant treatment',
        },
        {
            type: 'items',
            text: [
                'Type of implant used',
                'Accurate diagnosis and reasonable treatment plan',
                'Skilled and accurate procedure by the surgeon',
                'Selection of the proper abutment and prosthesis',
                'Formation of a proper occlusion',
                'Continued maintenance and management',
            ]

        },
        {
            type: 'para',
            text: [
                'Once the treatment is complete, patients are advised and trained to maintain the teeth. Routine follow-up with the dentist is equally essential. ',
                'Dr. Akshay’s DentAvenue has always been at the forefront of making dental solutions more accessible and transparent for the masses. Equipped with modern technology, and led by a team of highly skilled dentists, the dental clinic emerges as a reliable destination for patients looking for dental implants.',
                <span> Dr. Akshay Bandewar at this <Link href="https://www.dentavenue.in/" sx={{ color: 'blue' }}> dental clinic in Chembur</Link> has been consistently delivering top-class results to his patients for over 10+ years.'</span>,
                'If you are in the quest for a perfect, confident, and complete smile, your search ends here. Book your consultation at Dr. Akshay’s DentAvenue and get world-class dental implant solutions.',
            ]
        }

    ]
    return (
        <div>

            <DetailBlog DetailObject={DetailObject}></DetailBlog>
        </div>
    )
}
