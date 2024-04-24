import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const SimpleBreadcrumb = () => {
  const breadcrumbs = [
    { title: 'Home', path: '/' },
    { title: 'Category', path: '/category' },
    { title: 'Subcategory', path: '/category/subcategory' },
    { title: 'Item' },
  ]

  return (
    <nav aria-label="breadcrumb" className="flex">
      <div className="flex items-center space-x-1">
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1
          return (
            <div
              key={index}
              className={`${
                isLast ? 'text-black' : 'text-gray-500'
              } font-regular flex items-center font-medium`}
            >
              {breadcrumb.path && !isLast ? (
                <Link href={breadcrumb.path}>
                  <span className="hover:underline">{breadcrumb.title}</span>
                </Link>
              ) : (
                <span>{breadcrumb.title}</span>
              )}
              {!isLast && (
                <span className="mx-1">
                  <ChevronRight size={16} />
                </span>
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}

export default SimpleBreadcrumb
