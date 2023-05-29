//Make sure to mark Categories.tsx as client component!
'use client'
import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { categories } from '../../../public/params/CategoriesParams'

const Categories = () => {

    const params = useSearchParams()
    const category = params?.get('category')
    const pathname = usePathname()

    const isMainPage = pathname === '/'

    if (!isMainPage) {
        return null
    }

    return (
        <Container>
            <div
                className="
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                "
            >
                {
                    categories.map((item) => (
                        <CategoryBox
                            key={item.label}
                            label={item.label}
                            selected={category === item.label}
                            icon={item.icon}
                        />
                    ))
                }
            </div>
        </Container>
    );
}

export default Categories;