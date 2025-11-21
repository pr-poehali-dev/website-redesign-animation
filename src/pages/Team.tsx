import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const team = [
  {
    name: 'Александр Иванов',
    position: 'Генеральный директор',
    experience: '25 лет в строительстве',
    description: 'Руководит компанией с момента основания, эксперт в области управления крупными проектами',
  },
  {
    name: 'Сергей Петров',
    position: 'Технический директор',
    experience: '20 лет опыта',
    description: 'Отвечает за техническую экспертизу и контроль качества строительных работ',
  },
  {
    name: 'Елена Смирнова',
    position: 'Главный архитектор',
    experience: '18 лет опыта',
    description: 'Руководит проектным отделом, создает архитектурные концепции объектов',
  },
  {
    name: 'Михаил Козлов',
    position: 'Главный инженер',
    experience: '22 года опыта',
    description: 'Контролирует инженерные системы и коммуникации на всех объектах',
  },
  {
    name: 'Ольга Морозова',
    position: 'Директор по развитию',
    experience: '15 лет опыта',
    description: 'Отвечает за стратегическое планирование и развитие компании',
  },
  {
    name: 'Дмитрий Соколов',
    position: 'Начальник производства',
    experience: '19 лет опыта',
    description: 'Координирует все строительные работы и управляет производственными бригадами',
  },
  {
    name: 'Анна Волкова',
    position: 'Руководитель отдела закупок',
    experience: '12 лет опыта',
    description: 'Обеспечивает материально-техническое снабжение строительных объектов',
  },
  {
    name: 'Игорь Лебедев',
    position: 'Главный сметчик',
    experience: '16 лет опыта',
    description: 'Составляет сметную документацию и контролирует бюджеты проектов',
  },
  {
    name: 'Татьяна Новикова',
    position: 'Юрист',
    experience: '14 лет опыта',
    description: 'Обеспечивает правовое сопровождение всех договоров и сделок',
  },
];

const departments = [
  { name: 'Проектный отдел', count: 35, icon: 'Ruler' },
  { name: 'Строительное управление', count: 120, icon: 'HardHat' },
  { name: 'Инженерный отдел', count: 45, icon: 'Wrench' },
  { name: 'Отдел качества', count: 18, icon: 'Award' },
  { name: 'Административный отдел', count: 22, icon: 'Briefcase' },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6">Персонал</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Наша команда
            </h1>
            <p className="text-xl text-muted-foreground">
              Профессионалы с многолетним опытом работы в строительстве
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Структура компании</Badge>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Более 240 специалистов
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={dept.icon as any} size={32} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{dept.count}</div>
                  <p className="text-sm text-secondary font-medium">{dept.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Руководство</Badge>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Ключевые сотрудники
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="pt-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="User" size={64} className="text-primary/40" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary text-center font-medium mb-2">
                    {member.position}
                  </p>
                  <Badge variant="outline" className="mx-auto block w-fit mb-4">
                    {member.experience}
                  </Badge>
                  <p className="text-muted-foreground text-sm text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Присоединяйтесь к нашей команде
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Мы всегда ищем талантливых специалистов для работы над интересными проектами
            </p>
            <a href="/career" className="inline-block">
              <Badge className="text-lg px-6 py-3 cursor-pointer hover:scale-105 transition-transform">
                Открытые вакансии
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Badge>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
