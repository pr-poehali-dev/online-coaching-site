import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const programs = [
    {
      title: 'Стратегический менеджмент',
      duration: '8 недель',
      level: 'Продвинутый',
      description: 'Разработка и реализация стратегий развития компании',
      modules: 12,
      icon: 'Target'
    },
    {
      title: 'Операционный менеджмент',
      duration: '6 недель',
      level: 'Средний',
      description: 'Оптимизация бизнес-процессов и управление операциями',
      modules: 10,
      icon: 'Settings'
    },
    {
      title: 'Бережливое производство',
      duration: '10 недель',
      level: 'Базовый',
      description: 'Внедрение принципов Lean и повышение эффективности',
      modules: 15,
      icon: 'TrendingUp'
    }
  ];

  const materials = [
    { id: 1, title: 'Модуль 1: Основы стратегического планирования', type: 'video', duration: '45 мин', completed: true },
    { id: 2, title: 'Модуль 2: SWOT-анализ и конкурентные стратегии', type: 'pdf', pages: 24, completed: true },
    { id: 3, title: 'Модуль 3: Сбалансированная система показателей', type: 'video', duration: '60 мин', completed: false },
    { id: 4, title: 'Практическое задание: Разработка стратегии', type: 'task', deadline: '15.11.2025', completed: false },
    { id: 5, title: 'Модуль 4: Управление изменениями', type: 'video', duration: '50 мин', completed: false }
  ];

  const testimonials = [
    { name: 'Алексей Петров', position: 'CEO, TechCorp', text: 'Программа помогла структурировать подход к стратегическому планированию. Внедрили методологию в компании.' },
    { name: 'Мария Иванова', position: 'Операционный директор', text: 'Отличное сочетание теории и практики. Сразу применили полученные знания в работе.' },
    { name: 'Дмитрий Соколов', position: 'Руководитель производства', text: 'Lean-подход изменил наше видение процессов. Эффективность выросла на 40%.' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" size={28} className="text-accent" />
            <span className="text-xl font-bold">Экспертные Программы</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className={`text-sm font-medium transition-colors hover:text-accent ${activeSection === 'home' ? 'text-accent' : 'text-muted-foreground'}`}>
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className={`text-sm font-medium transition-colors hover:text-accent ${activeSection === 'about' ? 'text-accent' : 'text-muted-foreground'}`}>
              О тренере
            </button>
            <button onClick={() => scrollToSection('programs')} className={`text-sm font-medium transition-colors hover:text-accent ${activeSection === 'programs' ? 'text-accent' : 'text-muted-foreground'}`}>
              Программы
            </button>
            <button onClick={() => scrollToSection('testimonials')} className={`text-sm font-medium transition-colors hover:text-accent ${activeSection === 'testimonials' ? 'text-accent' : 'text-muted-foreground'}`}>
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contact')} className={`text-sm font-medium transition-colors hover:text-accent ${activeSection === 'contact' ? 'text-accent' : 'text-muted-foreground'}`}>
              Контакты
            </button>
          </nav>

          <Button onClick={() => setIsLoggedIn(!isLoggedIn)} variant={isLoggedIn ? "outline" : "default"}>
            <Icon name={isLoggedIn ? "LogOut" : "User"} size={16} className="mr-2" />
            {isLoggedIn ? 'Выход' : 'Личный кабинет'}
          </Button>
        </div>
      </header>

      {isLoggedIn ? (
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Личный кабинет студента</h1>
            <p className="text-muted-foreground">Добро пожаловать! Продолжайте обучение</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Прогресс обучения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">65%</div>
                <p className="text-xs text-muted-foreground mt-1">2 из 3 модулей завершено</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Время обучения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">24ч</div>
                <p className="text-xs text-muted-foreground mt-1">В этом месяце</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Следующая встреча</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">05.11</div>
                <p className="text-xs text-muted-foreground mt-1">Онлайн-консультация</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Учебные материалы</CardTitle>
              <CardDescription>Ваша программа: Стратегический менеджмент</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {materials.map((material) => (
                  <div key={material.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${material.completed ? 'bg-accent text-white' : 'bg-muted'}`}>
                        {material.completed ? (
                          <Icon name="Check" size={20} />
                        ) : material.type === 'video' ? (
                          <Icon name="PlayCircle" size={20} />
                        ) : material.type === 'pdf' ? (
                          <Icon name="FileText" size={20} />
                        ) : (
                          <Icon name="ClipboardList" size={20} />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium">{material.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {material.type === 'video' && `Видео • ${material.duration}`}
                          {material.type === 'pdf' && `PDF • ${material.pages} стр.`}
                          {material.type === 'task' && `Задание • до ${material.deadline}`}
                        </p>
                      </div>
                    </div>
                    <Button variant={material.completed ? "outline" : "default"} size="sm">
                      {material.completed ? 'Повторить' : 'Открыть'}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <>
          <section id="home" className="relative py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="secondary" className="mb-2">
                    <Icon name="Award" size={14} className="mr-1" />
                    15+ лет опыта
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Трансформируйте ваш бизнес через стратегическое мышление
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Экспертные программы по стратегическому и операционному менеджменту. 
                    Практические инструменты для роста эффективности компании.
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" onClick={() => scrollToSection('programs')} className="gap-2">
                      <Icon name="BookOpen" size={18} />
                      Программы обучения
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="gap-2">
                      <Icon name="MessageSquare" size={18} />
                      Консультация
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden border-4 border-accent/20 shadow-2xl">
                    <img 
                      src="https://cdn.poehali.dev/projects/1bdb16b0-5f34-4ef5-92b0-236a507aff57/files/f1ba7be3-bf5e-4ded-a5e0-1a329b4f5a5c.jpg" 
                      alt="Тренер" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">О тренере</h2>
                <Separator className="mb-8 mx-auto w-24" />
                
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <p className="text-lg leading-relaxed mb-6">
                      Эксперт с 15-летним опытом в области стратегического управления и операционной эффективности. 
                      Работал с более чем 80 компаниями, помогая им достичь устойчивого роста и конкурентных преимуществ.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-accent mb-2">80+</div>
                        <p className="text-sm text-muted-foreground">Компаний-клиентов</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-accent mb-2">500+</div>
                        <p className="text-sm text-muted-foreground">Выпускников программ</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-accent mb-2">15</div>
                        <p className="text-sm text-muted-foreground">Лет практики</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="Briefcase" size={24} className="text-accent" />
                        <CardTitle className="text-lg">Специализация</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-accent" />
                          Стратегическое планирование
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-accent" />
                          Операционная эффективность
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-accent" />
                          Lean-методология
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="GraduationCap" size={24} className="text-accent" />
                        <CardTitle className="text-lg">Образование</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-accent" />
                          MBA, Executive Program
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-accent" />
                          Certified Lean Six Sigma
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-accent" />
                          PMP Certification
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section id="programs" className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Программы обучения</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Структурированные курсы с практическими инструментами для немедленного применения
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {programs.map((program, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <Icon name={program.icon as any} size={24} className="text-accent" />
                      </div>
                      <CardTitle>{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Длительность:</span>
                          <span className="font-medium">{program.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Уровень:</span>
                          <Badge variant="secondary">{program.level}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Модулей:</span>
                          <span className="font-medium">{program.modules}</span>
                        </div>
                        <Separator className="my-4" />
                        <Button className="w-full" onClick={() => scrollToSection('contact')}>
                          Записаться
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы выпускников</h2>
                <p className="text-lg text-muted-foreground">
                  Результаты наших студентов говорят сами за себя
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <Icon name="User" size={24} className="text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{testimonial.name}</CardTitle>
                          <CardDescription className="text-sm">{testimonial.position}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Запись на консультацию</h2>
                  <p className="text-lg text-muted-foreground">
                    Обсудим вашу ситуацию и подберем оптимальную программу
                  </p>
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <Tabs defaultValue="consultation" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="consultation">Консультация</TabsTrigger>
                        <TabsTrigger value="contacts">Контакты</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="consultation" className="space-y-4 mt-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Имя</label>
                          <Input placeholder="Ваше имя" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email</label>
                          <Input type="email" placeholder="example@company.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Телефон</label>
                          <Input type="tel" placeholder="+7 (___) ___-__-__" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Сообщение</label>
                          <Textarea placeholder="Расскажите о вашей ситуации и интересующей программе" rows={4} />
                        </div>
                        <Button className="w-full" size="lg">
                          <Icon name="Send" size={18} className="mr-2" />
                          Отправить заявку
                        </Button>
                      </TabsContent>
                      
                      <TabsContent value="contacts" className="space-y-6 mt-6">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Icon name="Mail" size={20} className="text-accent mt-1" />
                            <div>
                              <p className="font-medium">Email</p>
                              <p className="text-sm text-muted-foreground">expert@management-training.ru</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Icon name="Phone" size={20} className="text-accent mt-1" />
                            <div>
                              <p className="font-medium">Телефон</p>
                              <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Icon name="MapPin" size={20} className="text-accent mt-1" />
                            <div>
                              <p className="font-medium">Офис</p>
                              <p className="text-sm text-muted-foreground">Москва, ул. Тверская, 1</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Icon name="Clock" size={20} className="text-accent mt-1" />
                            <div>
                              <p className="font-medium">Часы работы</p>
                              <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}

      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={24} className="text-accent" />
              <span className="font-semibold">Экспертные Программы</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}