import { invariant } from "ts-invariant";
import { RootWrapper } from "./pageWrapper";

export const metadata = {
	title: "Shopping Cart · Saleor Storefront example",
};

export default function CheckoutPage({ searchParams }: { searchParams: { checkout?: string } }) {
	invariant(process.env.NEXT_PUBLIC_SALEOR_API_URL, "Missing NEXT_PUBLIC_SALEOR_API_URL env variable");

	if (!searchParams.checkout) {
		return null;
	}

	return (
		<div className="checkout-bg min-h-[calc(100vh-106px)]">
			<section className="mx-auto max-w-7xl p-8">
				<h1 className="mt-8 text-3xl font-bold text-neutral-900">Checkout</h1>

				<section className="mb-12 mt-6">
					<RootWrapper saleorApiUrl={process.env.NEXT_PUBLIC_SALEOR_API_URL} />
				</section>
			</section>
		</div>
	);
}
