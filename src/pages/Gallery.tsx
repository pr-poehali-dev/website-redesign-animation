import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const photos = [
  {
    id: 1,
    title: 'ТЦ "Европейский" - фасад',
    category: 'Коммерческая недвижимость',
    description: 'Современный торговый центр площадью 45 000 м² в центре Москвы',
  },
  {
    id: 2,
    title: 'ЖК "Северный" - строительство',
    category: 'Жилые комплексы',
    description: 'Монтаж монолитных конструкций жилого комплекса на 1200 квартир',
  },
  {
    id: 3,
    title: 'Завод "Техпром" - производственный цех',
    category: 'Промышленное строительство',
    description: 'Промышленное здание с современными инженерными системами',
  },
  {
    id: 4,
    title: 'Бизнес-центр "Столица"',
    category: 'Коммерческая недвижимость',
    description: 'Офисный комплекс класса А с подземным паркингом',
  },
  {
    id: 5,
    title: 'ЖК "Южные сады" - благоустройство',
    category: 'Жилые комплексы',
    description: 'Ландшафтный дизайн и благоустройство придомовой территории',
  },
  {
    id: 6,
    title: 'Склад логистического центра',
    category: 'Промышленное строительство',
    description: 'Современный складской комплекс с системой автоматизации',
  },
  {
    id: 7,
    title: 'ЖК "Парковый" - внутренняя отделка',
    category: 'Жилые комплексы',
    description: 'Чистовая отделка квартир премиум-класса',
  },
  {
    id: 8,
    title: 'ТЦ "Мега" - строительный процесс',
    category: 'Коммерческая недвижимость',
    description: 'Возведение металлоконструкций торгового центра',
  },
  {
    id: 9,
    title: 'Производственный комплекс "Альфа"',
    category: 'Промышленное строительство',
    description: 'Завод по производству строительных материалов',
  },
  {
    id: 10,
    title: 'ЖК "Речной" - фасадные работы',
    category: 'Жилые комплексы',
    description: 'Монтаж вентилируемого фасада с керамогранитом',
  },
  {
    id: 11,
    title: 'Офисный центр "Премьер"',
    category: 'Коммерческая недвижимость',
    description: 'Современное офисное здание с панорамным остеклением',
  },
  {
    id: 12,
    title: 'Реконструкция исторического здания',
    category: 'Реконструкция',
    description: 'Восстановление фасада здания XIX века в центре Москвы',
  },
];

const categories = ['Все проекты', 'Коммерческая недвижимость', 'Жилые комплексы', 'Промышленное строительство', 'Реконструкция'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Все проекты');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  const filteredPhotos = selectedCategory === 'Все проекты' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6">Галерея</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Фотографии наших проектов
            </h1>
            <p className="text-xl text-muted-foreground">
              Взгляните на реализованные объекты на всех этапах строительства
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <Icon name="Image" size={64} className="text-primary/30 transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="ZoomIn" size={48} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <Badge className="mb-2 bg-primary/80">{photo.category}</Badge>
                  <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl">
          {selectedPhoto && (
            <div className="animate-scale-in">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-lg mb-6">
                <Icon name="Image" size={120} className="text-primary/30" />
              </div>
              <Badge className="mb-3">{selectedPhoto.category}</Badge>
              <h2 className="text-3xl font-bold text-secondary mb-4">
                {selectedPhoto.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {selectedPhoto.description}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
