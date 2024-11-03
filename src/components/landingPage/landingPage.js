import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Fab,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import {
  AccessTime,
  AccountCircle,
  Article,
  Assignment,
  Build,
  BusinessSharp,
  CheckCircle,
  Dashboard,
  ExpandMore,
  Facebook,
  Factory,
  Group,
  Help,
  InsertDriveFile,
  Instagram,
  KeyboardArrowUp,
  LinkedIn,
  Payment as PaymentIcon,
  ShoppingCart,
  Store,
  Storefront,
  Warehouse,
  Work
} from '@mui/icons-material';
import { TextFieldSmall } from '../common/StyledComponent';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '12rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  boxShadow: theme.shadows[2],
  textAlign: 'center'
}));
const PlanCard = ({ title, audience, features, buttonText }) => (
  <Card sx={{ mx: 'auto', height: '32rem', backgroundColor: '#f0f0f0', flexWrap: 'wrap' }}>
    <CardContent>
      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Target Audience:</strong> {audience}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Key Features:</strong>
      </Typography>
      <List sx={{ paddingLeft: 2, margin: 0 }}>
        {features.map((feature, index) => (
          <ListItem key={index} sx={{ p: 0 }}>
            <ListItemIcon>
              <CheckCircle sx={{ color: '#4caf50' }} />
            </ListItemIcon>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" sx={{ mt: 3 }}>
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);
const LandingPage = () => {
  const navbarHeight = 50;
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeHeight = homeSection.offsetHeight;
        const homePosition = homeSection.getBoundingClientRect().top;
        if (homePosition <= -(homeHeight / 2)) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const FeatureCard = ({ icon: Icon, title, iconColor, color = '#fff' }) => (
    <Card
      sx={{
        height: '15rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: color,
        boxShadow: 2
      }}
    >
      <Icon sx={{ fontSize: 60, color: iconColor, mb: 2 }} />
      <Typography variant="h6" align="center" sx={{ mt: 2 }}>
        {title}
      </Typography>
    </Card>
  );
  const features = [
    { title: 'User Management', icon: AccountCircle, iconColor: '#3f51b5' },
    { title: 'Real-Time Dashboard', icon: Dashboard, iconColor: '#f50057' },
    { title: 'Purchase & Inventory Management', icon: ShoppingCart, iconColor: '#009688' },
    { title: 'Issuance (Manufacturing Control)', icon: Build, iconColor: '#e91e63' },
    { title: 'Transactions & Payments', icon: PaymentIcon, iconColor: '#ffc107' },
    { title: 'Sales Management', icon: Storefront, iconColor: '#4caf50' }
  ];
  const featureData = [
    {
      icon: Assignment,
      title: 'Manual Data Entry and Tracking',
      iconColor: '#3f51b5',
      problem:
        'Many factories rely on manual data entry and outdated systems, leading to errors, time loss, and inefficiency.',
      solution:
        'Vastrika automates data entry and tracking, ensuring real-time updates on inventory, purchases, and tasks, minimizing errors and saving time.'
    },
    {
      icon: Factory,
      title: 'Lack of Centralized Factory Management',
      problem:
        'Using separate systems for managing labor, inventory, and sales creates a fragmented view of operations.',
      solution:
        'Vastrika provides a centralized platform to manage everything from fabric purchases to sales orders, giving a unified view of factory operations.'
    },
    {
      icon: Work,
      title: 'Inefficient Task Management',
      problem:
        'Managing labor tasks manually or with paper-based systems leads to delays, miscommunication, and bottlenecks in production.',
      solution:
        'Vastrika’s Issuance Module allows factories to assign tasks digitally and track progress in real-time, ensuring timely task completion and clear communication.'
    },
    {
      icon: Warehouse,
      title: 'Inaccurate Inventory Control',
      problem:
        'Factories struggle to keep accurate track of raw materials, fabric rolls, and finished goods inventory, leading to overstocking or shortages.',
      solution:
        'Vastrika’s real-time inventory management ensures accurate tracking of fabric rolls, raw materials, and trading stock. It updates inventory automatically, reducing waste and inefficiencies.'
    },
    {
      icon: AccessTime,
      title: 'Delayed or Missed Payments',
      problem:
        'Factory owners struggle with tracking payments from buyers, leading to missed collections and cash flow issues.',
      solution:
        'Vastrika tracks buyer payments and collections automatically. This ensures steady cash flow and fewer manual follow-ups.'
    },
    {
      icon: Dashboard,
      title: 'Lack of Real-Time Insights',
      problem:
        'Factory owners and managers often lack a real-time view of their operations, delaying critical decision-making.',
      solution:
        'Vastrika’s real-time dashboard provides an at-a-glance overview of total sales, purchases, pending tasks, labor progress, collections, and payments, enabling timely and data-driven decisions.'
    },
    {
      icon: Article,
      title: 'Disorganized Sales Management',
      problem:
        'Managing sales orders and generating invoices manually can lead to disorganization, delayed shipments, and poor customer experience.',
      solution:
        'Vastrika streamlines sales by allowing users to generate invoices, manage sales orders, and track payments efficiently, ensuring smooth customer interactions.'
    },
    {
      icon: InsertDriveFile,
      title: 'Dependency on Paper-Based Systems',
      problem:
        'Relying on paper-based systems keeps factory owners in a constant state of high alert, worrying about theft, mismanagement, and errors.',
      solution:
        'Vastrika gives owners the freedom to remotely monitor and track factory operations, allowing them to confidently manage their business from anywhere, reducing stress and minimizing risks.'
    }
  ];
  const steps = [
    {
      icon: AccountCircle,
      title: 'Login & Set Up',
      description: 'Secure login and quick onboarding for your factory.'
    },
    {
      icon: BusinessSharp,
      title: 'Add Factory Data',
      description: 'Manage fabrics, colors, raw materials, and suppliers.'
    },
    {
      icon: ShoppingCart,
      title: 'Purchase Fabric & Materials',
      description: 'Buy fabric rolls and raw materials from suppliers, and automatically update inventory.'
    },
    {
      icon: Group,
      title: 'Issue Tasks to Labor',
      description: 'Assign fabric cutting, stitching, and packaging tasks to laborers through the issuance module.'
    },
    {
      icon: Dashboard,
      title: 'Monitor Progress',
      description: 'Track every stage of production in real-time on your dashboard.'
    },
    {
      icon: Store,
      title: 'Sell Finished Goods',
      description: 'Manage the sale of finished products and track payments from buyers.'
    }
  ];
  const testimonials = [
    {
      text: 'Vastrika helped us reduce production delays.',
      image: 'https://d3euaht4t57wqt.cloudfront.net/images/testimonial.jpg'
    },
    {
      text: 'The dashboard gives us a real-time view of our factory.',
      image: 'https://d3euaht4t57wqt.cloudfront.net/images/testimonial.jpg'
    },
    {
      text: 'Vastrika has simplified every process from fabric to sales.',
      image: 'https://d3euaht4t57wqt.cloudfront.net/images/testimonial.jpg'
    }
  ];
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <Box>
      {/* Navbar */}
      <AppBar position="fixed" elevation={1} sx={{ borderBottom: '1px solid #e0e0e0', bgcolor: '#fff' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
            <img
              src="https://d3euaht4t57wqt.cloudfront.net/images/vastrika.jpg"
              alt="Vastrika Logo"
              style={{ width: 200, height: 90 }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {['Home', 'Features', 'Pricing', 'Demo', 'Contact Us'].map((text) => (
                <ScrollLink key={text} to={text.toLowerCase()} smooth={true} duration={500} offset={-navbarHeight}>
                  <Button>{text}</Button>
                </ScrollLink>
              ))}
            </Box>
            <Button variant="outlined" onClick={() => navigate('/login')}>
              Login/Signup
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Hero Section */}
      <Box
        sx={{
          pt: '120px',
          p: 5,
          textAlign: 'center',
          color: '#333',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        id="home"
      >
        <Box sx={{ width: '80%' }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                Optimize Your Garment Manufacturing Process with Vastrika
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 600, mb: 4 }}>
                A smart solution to streamline your factory operations from fabric rolls to finished products
              </Typography>
              <Button variant="contained" color="error" sx={{ borderRadius: 5 }}>
                Book a Free Demo
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://d3euaht4t57wqt.cloudfront.net/images/herosection.jpg"
                alt="Illustration"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.4)'
                  }
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          pt: '120px',
          p: 5,
          textAlign: 'center',
          backgroundColor: '#F0F0F0',
          color: '#333',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        id="features"
      >
        <Box sx={{ width: '80%', mx: 'auto' }}>
          <Grid item>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                Simplify Every Stage of Your Manufacturing Process
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                From fabric procurement to sales management, Vastrika empowers you to take control of your factory’s
                workflow.
              </Typography>
            </Grid>
            <Grid item>
              <Box>
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                  {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <FeatureCard
                        icon={feature.icon}
                        title={feature.title}
                        content={feature.content}
                        iconColor={'slategray'}
                        alternate={index % 2 !== 0}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Solve Common Factory Challenges with Vastrika */}
      <Box
        sx={{
          pt: '120px',
          p: 5,
          textAlign: 'center',
          backgroundColor: '',
          color: '#333',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ width: '80%', mx: 'auto' }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} mb={4}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }} mb={4}>
                Solve Common Factory Challenges with Vastrika
              </Typography>
            </Grid>

            {featureData.map((feature, index) => (
              <Grid
                container
                spacing={5}
                key={index}
                mb={6}
                alignItems="center"
                direction={index % 2 === 0 ? 'row' : 'row-reverse'}
              >
                <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Box sx={{ maxWidth: 600, mb: 4, mx: { xs: 'auto', md: 0 } }}>
                    <div style={{ paddingLeft: 20 }}>
                      <Typography variant="body1" component="div">
                        <ul style={{ listStyleType: 'disc', margin: 0 }}>
                          <li>
                            <strong>The Problem:</strong> {feature.problem}
                          </li>
                          <li>
                            <strong>The Solution:</strong> {feature.solution}
                          </li>
                        </ul>
                      </Typography>
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <FeatureCard icon={feature.icon} title={feature.title} iconColor={'slategray'} color="#f0f0f0" />
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button variant="contained" color="error" sx={{ borderRadius: 5 }}>
                Book a Free Demo
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* How It Works Section */}
      <Box
        sx={{
          pt: '100px',
          p: 5,
          textAlign: 'center',
          backgroundColor: '#f0f0f0',
          color: '#333',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box sx={{ width: '80%', mx: 'auto' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 5 }}>
            How Vastrika Transforms Your Manufacturing Operations
          </Typography>

          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '15rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 3,
                    boxShadow: 2
                  }}
                >
                  <step.icon sx={{ fontSize: 60, color: 'slategray', mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {step.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* CTA Button */}
          <Box sx={{ mt: 6 }}>
            <Button variant="contained" color="error" sx={{ borderRadius: 5 }}>
              Get Started for Free
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Why Choose Vastrika Section */}
      <Box
        sx={{
          pt: '100px',
          p: 6,
          textAlign: 'center',
          backgroundColor: '#f9f9f9',
          color: '#333',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 6 }}>
          Why Vastrika?
        </Typography>
        <Box
          sx={{
            width: '80%',
            mx: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              justifyContent: 'center',
              display: 'flex'
            }}
          >
            <Box
              component="img"
              src="https://d3euaht4t57wqt.cloudfront.net/images/whyChoose.jpg"
              alt="Factory Owner or Customer"
              sx={{
                width: '25rem',
                height: '20rem',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                objectFit: 'cover',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)'
                }
              }}
            />
          </Box>
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, mb: { xs: 5, md: 0 } }}>
            <List>
              {[
                'Designed specifically for garment manufacturers.',
                'Comprehensive solution from fabric rolls to finished products.',
                'Real-time insights into factory operations.',
                'Automated inventory updates and cost tracking.',
                'Reduce errors and improve efficiency.'
              ].map((text, index) => (
                <ListItem key={index} sx={{ p: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: '#4caf50' }} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
      {/* Trusted by Manufacturers */}
      <Box
        sx={{
          pt: '120px',
          p: 5,
          textAlign: 'center',
          backgroundColor: '#F0F0F0',
          color: '#333',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box sx={{ width: '80%', mx: 'auto' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Trusted by Manufacturers
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Here’s what our customers are saying about Vastrika
          </Typography>
          <Slider.default {...testimonialSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard>
                  <CardContent>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      "{testimonial.text}"
                    </Typography>
                    <img
                      src={testimonial.image}
                      alt={`Testimonial ${index + 1}`}
                      style={{ width: '100px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                  </CardContent>
                </TestimonialCard>
              </div>
            ))}
          </Slider.default>
        </Box>
      </Box>
      {/* Flexible Plans for Every Factory Size*/}
      <Box
        sx={{
          pt: '120px',
          p: 5,
          textAlign: 'center',
          backgroundColor: '',
          color: '#333',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        id="pricing"
      >
        <Box sx={{ width: '80%', mx: 'auto' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 6 }}>
            Flexible Plans for Every Factory Size
          </Typography>
          <Grid container spacing={4}>
            {/* Starter Plan */}
            <Grid item xs={12} md={6}>
              <PlanCard
                title="Starter Plan"
                audience="Small factories or trading businesses with limited operations."
                features={[
                  '1-2 users (Admin + 1 sub-user)',
                  'Single factory management',
                  'Basic Inventory Control',
                  'Add and sell lots via Trading Stock purchases',
                  'Purchase Module',
                  'Sales Module',
                  'Collection Module',
                  'Daily Expense Tracking'
                ]}
                buttonText="Start Free Trial"
              />
            </Grid>

            {/* Standard Plan */}
            <Grid item xs={12} md={6}>
              <PlanCard
                title="Standard Plan"
                audience="Growing factories with in-house production."
                features={[
                  'Up to 5 users with module-based access',
                  'Single factory management (no multi-factory support)',
                  'All Starter Plan features',
                  'Issuance Module',
                  'Labor Management',
                  'Advanced Inventory Control',
                  'Buyer and Supplier Management'
                ]}
                buttonText="Get Started Now"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* See Vastrika in Action */}
      <Box
        sx={{
          pt: '120px',
          p: 5,
          textAlign: 'center',
          backgroundColor: '#F0F0F0',
          color: '#333',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        id="demo"
      >
        <Box sx={{ width: '80%', mx: 'auto' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            See Vastrika in Action
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Request a free demo and discover how Vastrika can transform your factory’s operations.
          </Typography>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box component="form" sx={{ maxWidth: 500 }}>
                <TextFieldSmall fullWidth label="Name" variant="outlined" margin="normal" required />
                <TextFieldSmall fullWidth label="Email" variant="outlined" margin="normal" type="email" required />
                <TextFieldSmall fullWidth label="Phone Number" variant="outlined" margin="normal" type="tel" required />
                <TextFieldSmall fullWidth label="Factory Name" variant="outlined" margin="normal" required />
                <TextFieldSmall fullWidth label="City" variant="outlined" margin="normal" required />
                <Button variant="contained" color="primary" sx={{ mt: 3 }} type="submit">
                  Book a Free Demo
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://d3euaht4t57wqt.cloudfront.net/images/herosection1.jpg"
                alt="Vastrika in Action"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)'
                  }
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/*Frequently Asked Questions */}
      <Box
        sx={{
          pt: '120px',
          p: 5,
          textAlign: 'center',
          color: '#333',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Frequently Asked Questions
        </Typography>
        <Box sx={{ width: '80%', mx: 'auto', mb: 4 }}>
          {[
            {
              question: 'What is Vastrika?',
              answer:
                'Vastrika is a comprehensive SAAS platform designed specifically for garment manufacturing factories. It helps streamline your operations from fabric procurement to finished product sales, offering real-time insights, automated inventory updates, and efficient labor management tools to ensure optimal workflow at every stage of production.'
            },
            {
              question: 'How do I onboard my factory?',
              answer:
                "Onboarding is simple! After signing up, you can easily input your factory's basic details, including your fabrics, colors, raw materials, suppliers, and buyers. Our user-friendly interface guides you through the process, and our customer support team is available for any questions or demo requests."
            },
            {
              question: 'What kind of support does Vastrika offer?',
              answer:
                'Vastrika provides robust customer support, including a knowledge base, live chat, email assistance, and onboarding support. Our team will help you get set up and is available to assist with any queries you may have along the way. We also offer demos to help you understand the platform in-depth.'
            },
            {
              question: 'Can I upgrade my plan later?',
              answer:
                'Yes, absolutely! You can easily upgrade from the **Starter Plan** to the **Standard Plan** at any time. The upgrade will give you access to additional features like issuance management, labor tracking, and advanced inventory control for in-house production.'
            }
          ].map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1, backgroundColor: '#f0f0f0' }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ mt: -2 }}>
                <Typography textAlign={'start'} variant="body1">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Box sx={{ width: '80%', mx: 'auto', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Still have questions? <br />
            <IconButton color="primary">
              <Tooltip title="Contact Support">
                <Help />
              </Tooltip>
            </IconButton>
          </Typography>
        </Box>
      </Box>
      {/** Contact section */}
      <Box
        sx={{
          pt: 5,
          pb: 3,
          px: 2,
          backgroundColor: '#333',
          color: '#fff',
          textAlign: 'center'
        }}
        id="contact us"
      >
        <Box
          sx={{
            maxWidth: '1200px',
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Quick Links */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Quick Links
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <Link href="/" color="inherit" sx={{ mx: 1 }}>
                Home
              </Link>{' '}
              |
              <Link href="/features" color="inherit" sx={{ mx: 1 }}>
                Features
              </Link>{' '}
              |
              <Link href="/pricing" color="inherit" sx={{ mx: 1 }}>
                Pricing
              </Link>{' '}
              |
              <Link href="/contact" color="inherit" sx={{ mx: 1 }}>
                Contact Us
              </Link>
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton href="https://facebook.com" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://linkedin.com" color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton href="https://instagram.com" color="inherit">
                <Instagram />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email:{' '}
              <a href="mailto:info@vastrika.com" style={{ color: '#fff' }}>
                info@vastrika.com
              </a>
            </Typography>
            <Typography variant="body2">
              Phone:{' '}
              <a href="tel:+1234567890" style={{ color: '#fff' }}>
                +123 456 7890
              </a>
            </Typography>
          </Box>
          <Box
            component="form"
            sx={{
              maxWidth: '600px',
              mx: 'auto',
              py: 2,
              px: 3,
              borderRadius: '8px',
              backgroundColor: '#444'
            }}
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
              Stay updated with Vastrika – Join our newsletter!
            </Typography>
            <TextFieldSmall variant="outlined" placeholder="Email Address" fullWidth sx={{ mb: 2 }} />
            <Button variant="contained" color="primary" sx={{ width: '100%' }}>
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
      {/* button floating */}
      {isVisible && (
        <Box
          sx={{
            position: 'fixed',
            right: 10,
            bottom: 10
          }}
        >
          <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
            <Fab
              sx={{
                bgcolor: 'darkgray',
                '&:hover': {
                  bgcolor: 'grey'
                }
              }}
              aria-label="up-arrow"
            >
              <KeyboardArrowUp />
            </Fab>
          </ScrollLink>
        </Box>
      )}
    </Box>
  );
};

export default LandingPage;
