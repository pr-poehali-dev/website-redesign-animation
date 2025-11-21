import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
  { name: 'Главная', path: '/' },
  { name: 'О компании', path: '/about' },
  { name: 'Услуги', path: '/services' },
  { name: 'Проекты', path: '/projects' },
  { name: 'Персонал', path: '/team' },
  { name: 'Новости', path: '/news' },
  { name: 'Карьера', path: '/career' },
  { name: 'Сертификаты', path: '/certificates' },
  { name: 'Партнеры', path: '/partners' },
  { name: 'Галерея', path: '/gallery' },
  { name: 'Отзывы', path: '/reviews' },
  { name: 'Контакты', path: '/contacts' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-2xl font-bold text-white">НТМ</span>
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold text-secondary">НТМ-Москва</div>
              <div className="text-xs text-muted-foreground">Строительная компания</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary bg-primary/10'
                    : 'text-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="default" className="hidden md:flex gap-2">
              <Icon name="Phone" size={18} />
              <span>Связаться</span>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all hover:bg-primary/10 hover:text-primary ${
                        location.pathname === item.path
                          ? 'text-primary bg-primary/10'
                          : 'text-secondary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
