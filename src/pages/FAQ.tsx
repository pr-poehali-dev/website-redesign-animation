import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Общие вопросы',
      icon: 'HelpCircle',
      questions: [
        {
          q: 'Сколько стоит строительство дома?',
          a: 'Стоимость зависит от множества факторов: площади, материалов, технологий, региона. Типовой дом площадью 150 м² стоит от 4-6 млн рублей. Для точного расчета мы предлагаем бесплатную консультацию и составление сметы.'
        },
        {
          q: 'Как долго длится строительство?',
          a: 'Средние сроки: частный дом — 6-12 месяцев, коттедж — 8-18 месяцев, многоэтажное здание — 1.5-3 года. Точные сроки зависят от сложности проекта, погодных условий и выбранных материалов.'
        },
        {
          q: 'Предоставляете ли вы гарантию?',
          a: 'Да, мы даем гарантию 5 лет на все виды работ. На некоторые конструктивные элементы гарантия составляет до 10 лет. Гарантийное обслуживание включает устранение любых дефектов за наш счет.'
        }
      ]
    },
    {
      category: 'Документация',
      icon: 'FileText',
      questions: [
        {
          q: 'Какие документы нужны для начала строительства?',
          a: 'Необходимы: правоустанавливающие документы на участок, разрешение на строительство, утвержденный проект, технические условия на подключение коммуникаций. Мы поможем собрать весь пакет документов.'
        },
        {
          q: 'Помогаете ли с получением разрешений?',
          a: 'Да, мы оказываем полное сопровождение: подготовка документов, согласования в госорганах, получение разрешений и ввод объекта в эксплуатацию. Это входит в наши услуги.'
        }
      ]
    },
    {
      category: 'Оплата и договор',
      icon: 'CreditCard',
      questions: [
        {
          q: 'Какие формы оплаты вы принимаете?',
          a: 'Мы принимаем безналичный расчет, банковские переводы, рассрочку платежей. Возможна поэтапная оплата по мере выполнения работ. Предоплата обычно составляет 30-50%.'
        },
        {
          q: 'Можно ли вносить изменения в проект?',
          a: 'Да, изменения возможны на любом этапе. На стадии проектирования — бесплатно, после начала строительства — за дополнительную плату в зависимости от объема изменений.'
        },
        {
          q: 'Что входит в договор?',
          a: 'Договор включает: описание работ, сроки, стоимость, график платежей, гарантийные обязательства, ответственность сторон, порядок сдачи-приемки работ.'
        }
      ]
    },
    {
      category: 'Материалы и технологии',
      icon: 'Package',
      questions: [
        {
          q: 'Можно ли использовать свои материалы?',
          a: 'Да, вы можете приобрести материалы самостоятельно. Однако мы рекомендуем использовать наших проверенных поставщиков — это гарантирует качество и позволяет получить скидки. При использовании ваших материалов гарантия на них не распространяется.'
        },
        {
          q: 'Какие технологии строительства вы используете?',
          a: 'Мы работаем со всеми современными технологиями: монолитное строительство, каркасные дома, кирпич, газобетон, CLT-панели. Подберем оптимальную технологию под ваши задачи и бюджет.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Часто задаваемые вопросы
          </h1>
          <p className="text-lg text-muted-foreground">
            Ответы на популярные вопросы о строительстве
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name={category.icon as any} size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const globalIndex = categoryIndex * 10 + index;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <Card
                      key={index}
                      className="overflow-hidden transition-all duration-300 border-2 border-transparent hover:border-primary/30 cursor-pointer"
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                    >
                      <CardContent className="p-0">
                        <div className="p-6 flex items-center justify-between">
                          <h3 className="font-semibold text-lg pr-4">{faq.q}</h3>
                          <Icon
                            name={isOpen ? 'ChevronUp' : 'ChevronDown'}
                            size={24}
                            className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <div className="px-6 pb-6 text-muted-foreground border-t pt-4">
                            {faq.a}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto mt-16 glass-effect border-primary/20">
          <CardContent className="p-8 text-center">
            <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Не нашли ответ на свой вопрос?</h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами, и наши специалисты проконсультируют вас по любым вопросам
            </p>
            <Button className="gradient-primary hover:scale-105 transition-all shadow-lg group">
              <Icon name="Phone" size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
              Задать вопрос
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
