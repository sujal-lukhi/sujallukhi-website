import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ChevronDown,
  BarChart3,
  Database,
  PieChart,
  TrendingUp,
  Code,
  Palette,
  Monitor,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Top Banner */}
      <div className="w-full bg-gradient-primary py-3 px-4">
        <div className="container mx-auto text-center">
          <p className="text-white font-medium text-sm md:text-base drop-shadow-sm">
            🚀 Data Analyst • Python Developer • Currently Available for Opportunities
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-12 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SL
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-up">
            {/* Profile Picture */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="w-full h-full rounded-full bg-gradient-primary p-1 animate-pulse-glow">
                <img 
                  src="/lovable-uploads/2efc669b-29c5-4c92-95e6-bc8d87eabb85.png" 
                  alt="Sujalkumar Lukhi - Data Analyst"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float">
                <BarChart3 className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              Sujalkumar Lukhi
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Aspiring Data Analyst | Skilled in Python, Data Visualization, and BI Tools
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Passionate B.Tech IT student with a strong interest in Python for data analytics, 
              creating meaningful insights from complex datasets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('portfolio')} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg group"
              >
                View My Work 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Floating Analytics Icons */}
          <div className="absolute top-1/2 left-10 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-16 h-16 bg-background/90 border border-border rounded-lg flex items-center justify-center shadow-glow">
              <PieChart className="w-8 h-8 text-primary" />
            </div>
          </div>
          <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-16 h-16 bg-background/90 border border-border rounded-lg flex items-center justify-center shadow-glow">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
          </div>
          <div className="absolute bottom-1/3 left-1/4 animate-float" style={{ animationDelay: '3s' }}>
            <div className="w-12 h-12 bg-background/90 border border-border rounded-lg flex items-center justify-center shadow-glow">
              <Database className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate B.Tech IT student in my 7th semester at SAL Engineering & Technical Institute, 
                with a strong focus on data analytics and Python programming. My journey in data science began 
                with a curiosity about extracting meaningful insights from complex datasets.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently serving as a Data Analyst Intern at CSRBOX, where I apply my skills in data collection, 
                analysis, and visualization to drive actionable business insights.
              </p>

              <div className="pt-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Let's Connect
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">B.Tech (IT) - 7th Semester</h4>
                    <p className="text-muted-foreground">SAL Engineering & Technical Institute</p>
                  </div>
                  <div>
                    <h4 className="font-medium">12th Science - 60%</h4>
                    <p className="text-muted-foreground">Sarthak Vidhya Sankul</p>
                  </div>
                  <div>
                    <h4 className="font-medium">10th - 94%</h4>
                    <p className="text-muted-foreground">Shrushti Vidhya Vihar</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4 text-accent">Experience</h3>
                <div>
                  <h4 className="font-medium">Data Analyst Intern</h4>
                  <p className="text-muted-foreground">CSRBOX</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Data collection, analysis, and visualization with focus on actionable insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Languages & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">SQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Analytics Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">NumPy</Badge>
                  <Badge variant="secondary">Pandas</Badge>
                  <Badge variant="secondary">Matplotlib</Badge>
                  <Badge variant="secondary">Seaborn</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <PieChart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Visualization Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Excel</Badge>
                  <Badge variant="secondary">Power BI</Badge>
                  <Badge variant="secondary">Tableau</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Database className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Data Collection & Cleaning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive data collection from various sources and thorough cleaning processes 
                  to ensure data quality and reliability for analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Data Visualization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creating compelling visual representations of data using advanced tools like 
                  Matplotlib, Seaborn, and interactive visualization libraries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Monitor className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Dashboard Creation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building interactive dashboards using Power BI and Tableau to provide 
                  real-time insights and enable data-driven decision making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <div className="h-48 bg-gradient-primary flex items-center justify-center">
                <img 
                  src="/lovable-uploads/0dd1572f-d756-4f15-aada-0cd16fc97916.png" 
                  alt="E-Commerce Sales Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">E-Commerce Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Built an interactive Power BI dashboard for e-commerce data analysis. Collected raw data, 
                  performed comprehensive cleaning, and created visualizations showing sales trends, 
                  customer behavior, and revenue insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Power BI</Badge>
                  <Badge>Data Cleaning</Badge>
                  <Badge>Sales Analysis</Badge>
                </div>
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <img 
                  src="/lovable-uploads/17cf700e-a938-47f7-88e7-695779635de9.png" 
                  alt="Hospital Emergency Room Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Hospital Management Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Developed a comprehensive Tableau dashboard for hospital management system. 
                  Analyzed patient data, resource utilization, and operational efficiency to 
                  provide actionable insights for healthcare management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Tableau</Badge>
                  <Badge>Healthcare Analytics</Badge>
                  <Badge>Data Visualization</Badge>
                </div>
                <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having 
                a conversation about data analytics. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:sujallukhi5@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      sujallukhi5@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+919313684573" className="text-muted-foreground hover:text-accent transition-colors">
                      +91-9313684573
                    </a>
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <a 
                    href="https://github.com/sujallukhi" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-background rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/sujallukhi" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-background rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your Name" className="bg-card border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="bg-card border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project or just say hello!"
                      className="bg-card border-border min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Sujalkumar Lukhi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
