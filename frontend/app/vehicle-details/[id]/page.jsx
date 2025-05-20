import VehicleDetails from "@/components/vehicle-details";

export default function VehicleDetailsPage({ params }) {
	return <VehicleDetails vehicleId={params.id} />;
}
