import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Chip,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  Favorite,
  PregnantWoman,
  Coronavirus,
  Male,
  FavoriteBorder,
  Woman,
  FavoriteSharp,
  Healing,
  Sick,
  Bloodtype,
  Whatshot,
  MonitorHeart,
  LocalHospital,
  Science,
  MedicalServices,
  HealthAndSafety,
  Biotech,
  Vaccines,
  Air,
  Thermostat,
   Warning
} from '@mui/icons-material';
import { TestCategory } from '../types';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TestCategory | null>(null);
  const [open, setOpen] = useState(false);

  const testCategories: TestCategory[] = [
    {
      id: 'diabetes',
      name: 'Diabetes',
      description: 'Comprehensive diabetes screening and monitoring tests to help manage blood sugar levels effectively.',
      icon: <MonitorHeart sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Blood Glucose Test', price: '₹300', description: 'Measures current blood sugar levels' },
        { name: 'HbA1c Test', price: '₹600', description: 'Average blood sugar levels over past 3 months' },
        { name: 'Insulin Test', price: '₹800', description: 'Measures insulin levels in blood' },
        { name: 'C-Peptide Test', price: '₹900', description: 'Assesses insulin production' },
      ],
    },
    {
      id: 'pregnancy',
      name: 'Pregnancy',
      description: 'Complete pregnancy tests and prenatal screening for maternal and fetal health.',
      icon: <PregnantWoman sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Pregnancy Test', price: '₹200', description: 'Confirms pregnancy' },
        { name: 'Prenatal Screening', price: '₹1200', description: 'Comprehensive prenatal health check' },
        { name: 'Ultrasound Scan', price: '₹1500', description: 'Fetal development monitoring' },
        { name: 'NIPT Test', price: '₹2500', description: 'Non-invasive prenatal testing' },
      ],
    },
    {
      id: 'thyroid',
      name: 'Thyroid',
      description: 'Complete thyroid function tests and hormone analysis for proper diagnosis.',
      icon: <MedicalServices sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'TSH Test', price: '₹400', description: 'Thyroid stimulating hormone test' },
        { name: 'T3 & T4 Test', price: '₹700', description: 'Thyroid hormone levels test' },
        { name: 'Thyroid Antibody Test', price: '₹900', description: 'Detects autoimmune thyroid conditions' },
        { name: 'Thyroid Scan', price: '₹1800', description: 'Imaging of thyroid gland' },
      ],
    },
    {
      id: 'liver',
      name: 'Liver',
      description: 'Comprehensive liver function tests to assess liver health and detect abnormalities.',
      icon: <Biotech sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Liver Function Test', price: '₹800', description: 'Comprehensive liver health assessment' },
        { name: 'ALT/AST Test', price: '₹500', description: 'Liver enzyme analysis' },
        { name: 'Bilirubin Test', price: '₹400', description: 'Bilirubin level measurement' },
        { name: 'Albumin Test', price: '₹350', description: 'Protein production assessment' },
      ],
    },
    // {
    //   id: 'covid',
    //   name: 'COVID',
    //   description: 'Reliable COVID-19 testing including RT-PCR and rapid antigen tests.',
    //   icon: <Coronavirus sx={{ fontSize: 30 }} />,
    //   tests: [
    //     { name: 'RT-PCR Test', price: '₹1200', description: 'Most accurate COVID detection' },
    //     { name: 'Rapid Antigen Test', price: '₹500', description: 'Quick COVID screening' },
    //     { name: 'Antibody Test', price: '₹800', description: 'Past infection detection' },
    //     { name: 'Home Collection', price: '₹300', description: 'Sample collection at home' },
    //   ],
    // },
    {
      id: 'prostate',
      name: 'Prostate',
      description: 'Prostate health screening including PSA tests for early detection of issues.',
      icon: <Male sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'PSA Test', price: '₹900', description: 'Prostate-specific antigen test' },
        { name: 'Digital Rectal Exam', price: '₹600', description: 'Physical prostate examination' },
        { name: 'Prostate Ultrasound', price: '₹1800', description: 'Imaging of prostate gland' },
        { name: 'Biopsy', price: '₹3500', description: 'Tissue sample analysis' },
      ],
    },
    {
      id: 'fertility',
      name: 'Fertility',
      description: 'Comprehensive fertility testing for both men and women planning to start a family.',
      icon: <FavoriteBorder sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Semen Analysis', price: '₹1000', description: 'Male fertility assessment' },
        { name: 'Ovulation Testing', price: '₹700', description: 'Fertility window detection' },
        { name: 'Hormone Profile', price: '₹1500', description: 'Reproductive hormone analysis' },
        { name: 'HSG Test', price: '₹2500', description: 'Fallopian tube assessment' },
      ],
    },
    {
      id: 'bone',
      name: 'Bone',
      description: 'Bone health assessments including density scans and mineral level tests.',
      icon: <Healing sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Bone Density Scan', price: '₹2000', description: 'Osteoporosis risk assessment' },
        { name: 'Calcium Test', price: '₹500', description: 'Calcium level measurement' },
        { name: 'Vitamin D Test', price: '₹800', description: 'Vitamin D level assessment' },
        { name: 'Alkaline Phosphatase', price: '₹600', description: 'Bone metabolism indicator' },
      ],
    },
    {
      id: 'gastro',
      name: 'Gastro',
      description: 'Gastrointestinal health tests for digestive system assessment and diagnosis.',
      icon: <Science sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Endoscopy', price: '₹3500', description: 'Upper GI tract examination' },
        { name: 'Colonoscopy', price: '₹4500', description: 'Lower GI tract examination' },
        { name: 'Stool Test', price: '₹600', description: 'Digestive health analysis' },
        { name: 'H. Pylori Test', price: '₹800', description: 'Stomach bacteria detection' },
      ],
    },
    {
      id: 'cervix',
      name: 'Cervix',
      description: 'Cervical health screening including Pap smears and HPV testing.',
      icon: <Woman sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Pap Smear', price: '₹800', description: 'Cervical cancer screening' },
        { name: 'HPV Test', price: '₹1200', description: 'Human papillomavirus detection' },
        { name: 'Colposcopy', price: '₹1800', description: 'Detailed cervical examination' },
        { name: 'Biopsy', price: '₹2500', description: 'Tissue sample analysis' },
      ],
    },
    {
      id: 'heart',
      name: 'Heart',
      description: 'Comprehensive cardiac testing for heart health assessment and monitoring.',
      icon: <FavoriteSharp sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'ECG', price: '₹600', description: 'Electrical heart activity' },
        { name: 'Echocardiogram', price: '₹2500', description: 'Heart ultrasound imaging' },
        { name: 'Stress Test', price: '₹3000', description: 'Heart performance under exertion' },
        { name: 'Cholesterol Panel', price: '₹900', description: 'Lipid profile assessment' },
      ],
    },
    {
      id: 'kidney',
      name: 'Kidney',
      description: 'Kidney function tests to assess renal health and detect potential issues.',
      icon: <HealthAndSafety sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Kidney Function Test', price: '₹800', description: 'Comprehensive renal assessment' },
        { name: 'Creatinine Test', price: '₹400', description: 'Kidney filtration rate' },
        { name: 'Urine Analysis', price: '₹300', description: 'Kidney health indicators' },
        { name: 'Ultrasound KUB', price: '₹1800', description: 'Kidney imaging' },
      ],
    },
    {
      id: 'cancer',
      name: 'Cancer',
      description: 'Advanced cancer screening tests for early detection and monitoring.',
      icon: <Healing sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Tumor Markers', price: '₹1200', description: 'Cancer indicator proteins' },
        { name: 'Biopsy', price: '₹3000', description: 'Tissue examination' },
        { name: 'PET Scan', price: '₹8500', description: 'Cancer detection imaging' },
        { name: 'Mammogram', price: '₹2000', description: 'Breast cancer screening' },
      ],
    },
    {
      id: 'breast',
      name: 'Breast',
      description: 'Breast health screening including mammograms and ultrasound examinations.',
      icon: <Woman sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Mammogram', price: '₹2000', description: 'Breast cancer screening' },
        { name: 'Breast Ultrasound', price: '₹1800', description: 'Breast tissue imaging' },
        { name: 'Biopsy', price: '₹2500', description: 'Tissue sample analysis' },
        { name: 'Clinical Exam', price: '₹600', description: 'Physical breast examination' },
      ],
    },
    {
      id: 'vitamins',
      name: 'Vitamins',
      description: 'Comprehensive vitamin level testing to identify deficiencies and imbalances.',
      icon: <Vaccines sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Vitamin D Test', price: '₹800', description: 'Vitamin D level assessment' },
        { name: 'Vitamin B12 Test', price: '₹700', description: 'B12 deficiency detection' },
        { name: 'Vitamin Panel', price: '₹2000', description: 'Comprehensive vitamin analysis' },
        { name: 'Mineral Test', price: '₹1200', description: 'Essential mineral levels' },
      ],
    },
    {
      id: 'tuberculosis',
      name: 'Tuberculosis (TB)',
      description: 'TB screening and diagnostic tests for early detection and treatment.',
      icon: <Sick sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'TB Skin Test', price: '₹500', description: 'Tuberculin skin test' },
        { name: 'Sputum Test', price: '₹700', description: 'Mucus sample analysis' },
        { name: 'IGRA Blood Test', price: '₹1500', description: 'Interferon-gamma release assay' },
        { name: 'Chest X-Ray', price: '₹1200', description: 'Lung imaging for TB detection' },
      ],
    },
    {
      id: 'anemia',
      name: 'Anemia',
      description: 'Complete blood count and iron deficiency tests to diagnose anemia types.',
      icon: <Bloodtype sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Complete Blood Count', price: '₹300', description: 'Blood cell analysis' },
        { name: 'Iron Studies', price: '₹800', description: 'Iron deficiency assessment' },
        { name: 'Hemoglobin Test', price: '₹150', description: 'Blood oxygen carrier test' },
        { name: 'Ferritin Test', price: '₹600', description: 'Iron storage assessment' },
      ],
    },
    {
      id: 'lungs',
      name: 'Lungs',
      description: 'Respiratory health tests including lung function and capacity assessments.',
      icon: <Air sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Spirometry', price: '₹900', description: 'Lung function test' },
        { name: 'Chest X-Ray', price: '₹1200', description: 'Lung imaging' },
        { name: 'CT Scan', price: '₹4500', description: 'Detailed lung imaging' },
        { name: 'Arterial Blood Gas', price: '₹800', description: 'Oxygen level measurement' },
      ],
    },
    {
      id: 'fever',
      name: 'Fever',
      description: 'Comprehensive fever panel tests to identify underlying causes and infections.',
      icon: <Whatshot sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Complete Blood Count', price: '₹300', description: 'Infection indicators' },
        { name: 'Malaria Test', price: '₹500', description: 'Malaria parasite detection' },
        { name: 'Dengue Test', price: '₹800', description: 'Dengue virus detection' },
        { name: 'Typhoid Test', price: '₹600', description: 'Typhoid fever screening' },
      ],
    },
    {
      id: 'allergy',
      name: 'Allergy',
      description: 'Allergy testing to identify triggers and develop appropriate management plans.',
      icon: <Warning sx={{ fontSize: 30 }} />,
      tests: [
        { name: 'Allergy Panel', price: '₹2500', description: 'Comprehensive allergen testing' },
        { name: 'Skin Prick Test', price: '₹1800', description: 'Allergen reaction assessment' },
        { name: 'Food Allergy Test', price: '₹2000', description: 'Food sensitivity detection' },
        { name: 'Blood Allergy Test', price: '₹1500', description: 'IgE antibody measurement' },
      ],
    },
  ];

  const handleCategoryClick = (category: TestCategory) => {
    setSelectedCategory(category);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCategory(null);
  };

  return (
    <Box sx={{ my: 6 }}>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Our Diagnostic Services
      </Typography>
      <Typography variant="h6" component="p" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
        Comprehensive health testing with accurate results
      </Typography>

      <Grid container spacing={3}>
        {testCategories.map((category) => (
          <Grid size={{xs:6,sm:4,md:3}} key={category.id}>
            <Card 
              sx={{  
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                  backgroundColor: '#FEF7FA'
                },
              }}
              // onClick={() => handleCategoryClick(category)}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    backgroundColor: '#F9C5D5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: '#E91E63'
                  }}
                >
                  {category.icon}
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {category.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ 
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {category.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ backgroundColor: '#F9C5D5' }}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#E91E63' }}>
              {selectedCategory?.name} Tests
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers sx={{ py: 3 }}>
          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            {selectedCategory?.description}
          </Typography>
          <Grid container spacing={2}>
            {selectedCategory?.tests?.map((test, index) => (
              <Grid size={{xs:12}} key={index}>
                <Box display="flex" justifyContent="space-between" alignItems="center" p={2} 
                  sx={{ 
                    border: '1px solid #F9C5D5', 
                    borderRadius: 2,
                    backgroundColor: '#FEF7FA',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateX(4px)',
                      backgroundColor: '#FEE3EC'
                    }
                  }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {test.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {test.description}
                    </Typography>
                  </Box>
                  <Chip 
                    label={test.price} 
                    sx={{ 
                      backgroundColor: '#E91E63', 
                      color: 'white',
                      fontWeight: 'bold',
                      minWidth: '80px'
                    }} 
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleClose} sx={{ color: '#E91E63' }}>
            Close
          </Button>
          <Button 
            variant="contained" 
            onClick={handleClose}
            sx={{ 
              backgroundColor: '#E91E63',
              '&:hover': {
                backgroundColor: '#C2185B'
              }
            }}
          >
            Book Appointment
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Services;