import VehicleDetails from "@/components/vehicle-details";

export default async function VehicleDetailsPage({ params }) {
	const resolvedParams = await params;
	return <VehicleDetails vehicleId={resolvedParams.id} />;
}
