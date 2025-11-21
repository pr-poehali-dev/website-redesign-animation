import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const certificates = [
  {
    title: 'ISO 9001:2015',
    description: 'Система менеджмента качества',
    year: '2023',
    issuer: 'Международная организация по стандартизации',
  },
  {
    title: 'ISO 14001:2015',
    description: 'Система экологического менеджмента',
    year: '2023',
    issuer: 'Международная организация по стандартизации',
  },
  {
    title: 'ISO 45001:2018',
    description: 'Система менеджмента охраны труда',
    year: '2022',
    issuer: 'Международная организация по стандартизации',
  },
  {
    title: 'СРО',
    description: 'Допуск к строительным работам',
    year: '2024',
    issuer: 'Национальное объединение строителей',
  },
  {
    title: 'LEED',
    description: 'Сертификат зеленого строительства',
    year: '2023',
    issuer: 'U.S. Green Building Council',
  },
  {
    title: 'Лицензия МЧС',
    description: 'Проектирование и монтаж систем пожарной безопасности',
    year: '2024',
    issuer: 'МЧС России',
  },
];

const awards = [
  {
    year: '2024',
    title: 'Строитель года',
    description: 'Лучшая строительная организация Москвы',
  },
  {
    year: '2023',
    title: 'Премия в области качества',
    description: 'За высокое качество выполнения строительных работ',
  },
  {
    year: '2023',
    title: 'Лучший жилой комплекс',
    description: 'ЖК "Северный" признан лучшим проектом года',
  },
  {
    year: '2022',
    title: 'Инновационный проект',
    description: 'За внедрение BIM-технологий в строительстве',
  },
];

const memberships = [
  { name: 'Национальное объединение строителей', icon: 'Building2' },
  { name: 'Российский союз строителей', icon: 'Users' },
  { name: 'Торгово-промышленная палата', icon: 'Briefcase' },
  { name: 'Ассоциация строительных компаний', icon: 'Award' },
];

export default function Certificates() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6">Сертификаты</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Лицензии и награды
            </h1>
            <p className="text-xl text-muted-foreground">
              Подтверждение нашего профессионализма и качества работ
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Сертификаты и лицензии</Badge>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Наши аккредитации
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon name="Award" size={40} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary text-center mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-center mb-4">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                    <Badge variant="outline">{cert.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Награды</Badge>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Признание профессионалов
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-lg flex items-center justify-center shrink-0">
                      <Icon name="Trophy" size={48} className="text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold text-secondary">{award.title}</h3>
                        <Badge className="shrink-0">{award.year}</Badge>
                      </div>
                      <p className="text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Членство</Badge>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Профессиональные объединения
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberships.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={member.icon as any} size={32} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium text-secondary">{member.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Icon name="Shield" size={64} className="mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Гарантия качества
            </h2>
            <p className="text-xl text-white/90">
              Все наши сертификаты и лицензии подтверждают высокое качество работ 
              и соответствие международным стандартам
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}