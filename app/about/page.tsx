import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">О проекте</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <p className="text-lg mb-4">
            Наш проект — это платформа, которая позволяет исследовать Томск
            через интерактивные маршруты и увлекательные игровые сценарии. Мы
            собрали историю, традиции и легенды города в одном месте, чтобы вы
            могли погрузиться в его культурное наследие, пройтись по следам
            прошлого и даже стать частью старинных историй.
          </p>
          <p className="text-lg mb-4 font-bold">
          Наша миссия
          </p>
          <p className="text-lg">
              Вдохновить жителей и гостей города на исследование культурного
              наследия Томска через современные технологии и увлекательные
              форматы взаимодействия с историческими объектами и легендами.
          </p>
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/images/water-tower.png" alt="Historical landmark" fill className="object-cover" />
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg border">
        <h2 className="text-2xl font-bold mb-6">Как это работает?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Интерактивные маршруты</h3>
            <p>
              Выбирайте маршруты по интересным местам Томска и узнавайте
              уникальные истории о каждой точке.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Игровые сценарии</h3>
            <p>
              Погружайтесь в историю через игровые механики и квесты,
              связанные с реальными местами города.
            </p>
          </div>

          {/* <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Accessibility</h3>
            <p>Make information about historical sites accessible to everyone, regardless of location.</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}
