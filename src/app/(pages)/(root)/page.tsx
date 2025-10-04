import Link from "next/link";

function WebRoot() {
  return (
    <>
      <header>
        <div className="flex justify-between items-center">
          <div>
            <div>Aurelian Coffees</div>
          </div>
          <div>
            <nav className="flex space-x-4">
              <Link href="#">Menu</Link>
              <Link href="#">Our Story</Link>
              <Link href="#">Contact</Link>
            </nav>
          </div>
          <div>
            <Link href="#">Login</Link>
            Cart
          </div>
        </div>
      </header>
    </>
  );
}

export default WebRoot
