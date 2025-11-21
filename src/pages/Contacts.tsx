import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6">Контакты</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-muted-foreground">
              Ответим на все вопросы и подберем оптимальное решение для вашего проекта
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={28} className="text-primary" />
                </div>
                <CardTitle>Адрес офиса</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Москва, ул. Строителей, д. 1, офис 100
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Пн-Пт: 9:00 - 18:00<br />
                  Сб-Вс: выходной
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Phone" size={28} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+74951234567" className="text-lg text-primary font-medium hover:underline">
                  +7 (495) 123-45-67
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Бесплатная консультация
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" size={28} className="text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@ntm-msk.ru" className="text-lg text-primary font-medium hover:underline">
                  info@ntm-msk.ru
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Ответим в течение 1 часа
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-secondary mb-6">Форма обратной связи</h2>
              <p className="text-muted-foreground mb-8">
                Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ivan@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full hover:scale-105 transition-transform">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-bold text-secondary mb-6">Как нас найти</h2>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A64c2441bb0eb97ce87b66e3ff4e3f61ddce5fe3c4f47e8cc13cbcfed33b2e8db&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Карта офиса НТМ-Москва"
                ></iframe>
              </div>
              <Card className="mt-6">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Icon name="Navigation" size={20} className="text-primary" />
                    Как добраться
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="mt-1.5 shrink-0" />
                      <span>От метро "Строгино" - 5 минут пешком</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="mt-1.5 shrink-0" />
                      <span>Автобусы: 741, 638 до остановки "Строителей"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="mt-1.5 shrink-0" />
                      <span>Парковка для посетителей на территории</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
