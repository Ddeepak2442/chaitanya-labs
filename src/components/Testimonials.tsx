import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Rating,
  Avatar,
  Button,
  Container,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material';
import { Close, FilterList } from '@mui/icons-material';

type Testimonial = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  isLocalGuide?: boolean;
  reviewCount?: number;
  photoCount?: number;
};

const Testimonials: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [sortBy, setSortBy] = useState<'relevant' | 'newest' | 'highest' | 'lowest'>('relevant');

  const allTestimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Yuva Kishore',
      rating: 5,
      comment: 'I had a very good experience at Chaitanya Diagnostics Center. The staff were polite, well-trained, and very professional. The center was clean, well-organized, and maintained high hygiene standards. Reports were delivered on time and were accurate.',
      date: '3 months ago',
      avatar: 'Y',
      reviewCount: 3,
      photoCount: 4
    },
    {
      id: 2,
      name: 'Vsuseela Joy',
      rating: 5,
      comment: 'Had a great experience with Chaitanya Diagnostic Centre. They provided on-time doorstep service, were careful and friendly throughout the process, and delivered my reports quickly. Everything was well within budget. Highly recommended for their professionalism and efficiency!',
      date: '3 months ago',
      avatar: 'V',
      reviewCount: 2
    },
    {
      id: 3,
      name: 'Malathi Malu',
      rating: 5,
      comment: 'I visited Chaitanya Diagnostic centre they are highly skilled and explained the procedure clearly, making a potentially stressful experience comfortable. The centre is very clean and the staff were friendly. Thank you so much.',
      date: '1 week ago',
      avatar: 'M',
      reviewCount: 2
    },
    {
      id: 4,
      name: 'Deepak Sai Venkat Yellaboina',
      rating: 5,
      comment: 'I had a great experience with Chaitanya Diagnostic Center. Their home sample collection service is extremely convenient and well-managed. The staff arrived on time, followed all hygiene protocols, and made the process smooth and comfortable.',
      date: '6 months ago',
      avatar: 'D',
      reviewCount: 1
    },
    {
      id: 5,
      name: 'Sekhar Inakoti',
      rating: 5,
      comment: 'I had great experience with Mrs. Swaroop. Explained the results one by one received accurate and reliable results, staff friendliness, helpful, cleanliness and there is total package covered 16 tests which is really worth it, also advised me about nutrition and wellness.',
      date: '2 months ago',
      avatar: 'S',
      reviewCount: 6
    },
    {
      id: 6,
      name: 'Sathya',
      rating: 5,
      comment: 'Excellent experience with Chaitanya Diagnostic Centre – Highly recommended. I had a wonderful experience with Chaitanya Diagnostic Centre. Mr. Swaroop was very professional and caring.',
      date: '5 months ago',
      avatar: 'S',
      reviewCount: 2
    },
    {
      id: 7,
      name: 'Chandini Kondepudi',
      rating: 5,
      comment: 'Very affordable prices in recent times and can reach out to home sample collections within the vicinity. Thank you for the end to end support. Have a great success for Swaroop and Madhu and the team.',
      date: '5 months ago',
      avatar: 'C',
      reviewCount: 9,
      photoCount: 1
    },
    {
      id: 8,
      name: 'Kommu Sugandha Mani',
      rating: 5,
      comment: 'Chaitanya Diagnostics is known for its accurate and reliable test results. The centre has a highly professional and caring staff. They use advanced technology to ensure precision. Patients appreciate the clean and welcoming environment.',
      date: '2 months ago',
      avatar: 'K',
      reviewCount: 1
    },
    {
      id: 9,
      name: 'JAYA SREE VITHANALA',
      rating: 5,
      comment: "Excellent diagnostic center with user-friendly services! The process was smooth, and I received my reports quickly without any hassle. The staff is professional and provides clear guidance, making the experience stress-free. I also appreciate their helpful suggestions for further care.",
      date: '9 months ago',
      avatar: 'J',
      reviewCount: 6
    },
  ];

  const getSortedTestimonials = () => {
    const testimonials = showAll ? allTestimonials : allTestimonials.slice(0, 3);
    
    switch (sortBy) {
      case 'newest':
        return [...testimonials].sort((a, b) => {
          const getTime = (date: string) => {
            if (date.includes('week')) return parseInt(date) * 7;
            if (date.includes('month')) return parseInt(date) * 30;
            return parseInt(date);
          };
          return getTime(a.date) - getTime(b.date);
        });
      case 'highest':
        return [...testimonials].sort((a, b) => b.rating - a.rating);
      case 'lowest':
        return [...testimonials].sort((a, b) => a.rating - b.rating);
      case 'relevant':
      default:
        return testimonials;
    }
  };

  const displayedTestimonials = getSortedTestimonials();

  return (
    <Box sx={{ my: 6 }}>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
        What Our Patients Say
      </Typography>
      
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Rating value={4.9} precision={0.1} readOnly size="large" />
        <Typography variant="h6" component="p" sx={{ mt: 1 }}>
          ⭐⭐⭐⭐⭐ 4.9/5 (371+ reviews)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Google Reviews
        </Typography>
      </Box>
{/* 
      {showAll && (
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
          <Chip
            icon={<FilterList />}
            label="Most relevant"
            variant={sortBy === 'relevant' ? 'filled' : 'outlined'}
            onClick={() => setSortBy('relevant')}
            color={sortBy === 'relevant' ? 'primary' : 'default'}
          />
          <Chip
            label="Newest"
            variant={sortBy === 'newest' ? 'filled' : 'outlined'}
            onClick={() => setSortBy('newest')}
            color={sortBy === 'newest' ? 'primary' : 'default'}
          />
          <Chip
            label="Highest rating"
            variant={sortBy === 'highest' ? 'filled' : 'outlined'}
            onClick={() => setSortBy('highest')}
            color={sortBy === 'highest' ? 'primary' : 'default'}
          />
          <Chip
            label="Lowest rating"
            variant={sortBy === 'lowest' ? 'filled' : 'outlined'}
            onClick={() => setSortBy('lowest')}
            color={sortBy === 'lowest' ? 'primary' : 'default'}
          />
        </Box>
      )} */}

      <Grid container spacing={3}>
        {displayedTestimonials.map((testimonial) => (
          <Grid size={{xs:12,md:4}}  key={testimonial.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ p: 3, flexGrow: 1 }}>
                <Box display="flex" alignItems="flex-start" mb={2}>
                  <Avatar sx={{ bgcolor: '#F9C5D5', color: 'primary.dark', mr: 2 }}>
                    {testimonial.avatar}
                  </Avatar>
                  <Box flex={1}>
                    <Box display="flex" alignItems="center" gap={1} mb={0.5}>
                      <Typography variant="h6" component="h3">
                        {testimonial.name}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <Rating value={testimonial.rating} readOnly size="small" />
                    </Box>
                  </Box>
                </Box>
                <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
                  "{testimonial.comment}"
                </Typography>
                {/* <Typography variant="caption" color="text.secondary">
                  {testimonial.date}
                </Typography> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" sx={{ mt: 4 }}>
        <Button 
          variant="outlined" 
          size="large"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'View All Reviews'}
        </Button>
      </Box>
    </Box>
  );
};

export default Testimonials;