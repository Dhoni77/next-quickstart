import React from "react";
import { TypographyH2, TypographyP } from "../ui/typography";
import PricingCard, { PricingOptions, PricingTiers } from "./pricing-card";

export const pricing_perks: PricingOptions[] = [
	{
		tier: PricingTiers.FREE,
		title: "Free",
		description: "For new users",
		callToAction: "Try for free",
		price: 0,
		perks: ["Up to 10 active projects", "1 GB storage", "Email support"],
	},
	{
		tier: PricingTiers.HOBBY,
		title: "Hobby",
		description: "For freelancers and individuals",
		price: 19,
		callToAction: "Buy $19/month",
		perks: [
			"Up to 50 active projects",
			"5 GB storage",
			"Team collaboration",
			"Priority email and chat support",
		],
	},
	{
		tier: PricingTiers.ENTERPRISE,
		title: "Enterprise",
		description: "For companies and enterprises",
		price: 79,
		callToAction: "Buy $79/month",
		perks: [
			"Unlimited active projects",
			"20 GB storage",
			"Email and on-call support",
			"Unlimited reporting and logs",
		],
	},
];

export default function PricingSection() {
	return (
		<section className="grid grid-rows-[auto_1fr] grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8 pt-8 pb-16 px-24">
			<div className="col-span-3 max-md:col-span-2 max-sm:col-span-1 w-2/3 flex flex-col items-center justify-center justify-self-center">
				<TypographyH2 className="border-none font-extrabold">
					Why Next Starter?
				</TypographyH2>
				<TypographyP className="text-center">
					With incremental behavior and adaptable bundling strategies,
					Turbopack provides a fast and flexible development
					experience for apps of any size.
				</TypographyP>
			</div>
			{pricing_perks.map((item, index) => (
				<PricingCard key={index} {...item} />
			))}
		</section>
	);
}
