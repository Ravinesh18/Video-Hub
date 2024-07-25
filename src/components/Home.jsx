import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Welcome to Video Hub, your ultimate destination for diverse and
            engaging video content. At Video Hub, we pride ourselves on curating
            an extensive collection of videos that cater to all your
            entertainment, educational, and informational needs. Whether you're
            a movie buff, a curious learner, or simply looking for some
            light-hearted fun, Video Hub has something for everyone. Discover
            the latest movie trailers, exclusive behind-the-scenes footage, and
            in-depth reviews that keep you up-to-date with the film industry.
            Dive into insightful documentaries and informative tutorials that
            broaden your horizons and enhance your knowledge. Stay entertained
            with trending viral videos, comedy skits, and music videos that
            bring joy and excitement to your day. Video Hub is more than just a
            platform for watching videos; it's a vibrant community where
            creators and viewers connect. Join our community of passionate
            content creators who share their unique talents, stories, and
            perspectives with the world. Engage with fellow viewers through
            comments, likes, and shares, and be part of the conversations that
            matter to you. Our user-friendly interface ensures a seamless
            browsing experience, allowing you to easily find the content you
            love. With personalized recommendations and curated playlists, Video
            Hub makes it effortless to discover new and exciting videos tailored
            to your interests. Experience the world of captivating videos like
            never before. Your journey into endless entertainment and learning
            starts here at Video Hub. Join us today and explore the limitless
            possibilities that await you!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
