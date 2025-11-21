import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const projects = [
  {
    title: 'ТЦ "Европейский"',
    category: 'Коммерческая недвижимость',
    area: '45 000 м²',
    year: '2023',
    duration: '18 месяцев',
    description: 'Современный торговый центр с подземным паркингом на 500 машиномест. Включает 4 этажа торговых площадей, фуд-корт и развлекательную зону.',
    features: ['Монолитное строительство', 'Система вентиляции', 'Умное освещение', 'Панорамное остекление'],
  },
  {
    title: 'ЖК "Северный"',
    category: 'Жилые комплексы',
    area: '120 000 м²',
    year: '2023',
    duration: '30 месяцев',
    description: 'Жилой комплекс из 5 корпусов на 1200 квартир с развитой инфраструктурой. Детские площадки, спортивные зоны, подземный паркинг.',
    features: ['Монолитно-каркасная технология', 'Энергоэффективность класса А', 'Благоустроенная территория', 'Современные лифты'],
  },
  {
    title: 'Завод "Техпром"',
    category: 'Промышленное строительство',
    area: '80 000 м²',
    year: '2022',
    duration: '24 месяца',
    description: 'Производственный комплекс с современным технологическим оборудованием. Включает производственные цеха, складские помещения и административный корпус.',
    features: ['Металлоконструкции', 'Промышленная вентиляция', 'Система безопасности', 'Логистические пути'],
  },
  {
    title: 'Бизнес-центр "Столица"',
    category: 'Коммерческая недвижимость',
    area: '35 000 м²',
    year: '2022',
    duration: '20 месяцев',
    description: 'Офисное здание класса А с современными инженерными системами. Панорамное остекление, центральное кондиционирование, высокоскоростные лифты.',
    features: ['Стеклянный фасад', 'Система кондиционирования', 'Конференц-залы', 'Фитнес-центр'],
  },
  {
    title: 'ЖК "Южные сады"',
    category: 'Жилые комплексы',
    area: '95 000 м²',
    year: '2021',
    duration: '28 месяцев',
    description: 'Комфортный жилой комплекс с озеленением и ландшафтным дизайном. 4 корпуса переменной этажности с квартирами от студий до 4-комнатных.',
    features: ['Закрытая территория', 'Детские сады', 'Парковые зоны', 'Охраняемая парковка'],
  },
  {
    title: 'Логистический центр "Восток"',
    category: 'Промышленное строительство',
    area: '60 000 м²',
    year: '2021',
    duration: '16 месяцев',
    description: 'Современный складской комплекс с автоматизированной системой хранения и обработки грузов. Температурные зоны, рампы для погрузки.',
    features: ['Складские ячейки', 'Система автоматизации', 'Разгрузочные терминалы', 'Административно-бытовой корпус'],
  },
];

const categories = ['Все проекты', 'Коммерческая недвижимость', 'Жилые комплексы', 'Промышленное строительство'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Все проекты');

  const filteredProjects = selectedCategory === 'Все проекты' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6">Портфолио</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Наши проекты
            </h1>
            <p className="text-xl text-muted-foreground">
              Более 500 успешно реализованных проектов за 25 лет работы
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="transition-all hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-2 h-64 md:h-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon name="Building" size={80} className="text-primary/40" />
                  </div>
                  <div className="md:col-span-3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <CardTitle className="text-3xl">{project.title}</CardTitle>
                        <Badge className="shrink-0">{project.year}</Badge>
                      </div>
                      <Badge variant="outline" className="w-fit">{project.category}</Badge>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-6">{project.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Icon name="Ruler" size={18} className="text-primary" />
                          <span className="text-sm text-muted-foreground">Площадь: {project.area}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={18} className="text-primary" />
                          <span className="text-sm text-muted-foreground">Срок: {project.duration}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3">Особенности проекта:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <Icon name="CheckCircle2" size={14} className="text-primary shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className="hover:scale-105 transition-transform">
                        Подробнее о проекте
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Свяжитесь с нами для бесплатной консультации
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}