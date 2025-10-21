export default function UserProfilePage({ params }: { params: { username: string } }) {
  return (
    <div>
      <h1>User Profile: {params.username}</h1>
    </div>
  );
}
