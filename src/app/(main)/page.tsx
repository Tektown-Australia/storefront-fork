import { ProductListDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { ProductsList } from "@/ui/components/ProductsList";

export const metadata = {
	title: "ACME Storefront, powered by Saleor & Next.js",
	description:
		"Storefront Next.js Example for building performant e-commerce experiences with Saleor - the composable, headless commerce platform for global brands.",
};

export default async function Page() {
	const data = await executeGraphQL(ProductListDocument, { revalidate: 60 });

	if (!data.products) throw Error("No products found");

	const products = data.products.edges.map(({ node: product }) => product);

	return (
		<div>
			<section className="mx-auto max-w-7xl p-8 pb-16">
				<h2 className="sr-only">Product list</h2>
				<ProductsList products={products} />
			</section>
		</div>
	);
}
