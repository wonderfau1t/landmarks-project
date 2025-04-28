import Link from "next/link"
import { siteConfig } from "@/data/site-config"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">{siteConfig.name}</h3>
            <p className="text-gray-600">
            Откройте для себя богатую историю и культурное значение замечательных достопримечательностей. Познакомьтесь с их историей и наследием, которое они хранят.
            </p>
          </div>

          <div></div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Ссылки</h3>
            <ul className="space-y-2">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-600 hover:text-primary transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2">
              {siteConfig.footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-600 hover:text-primary transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
