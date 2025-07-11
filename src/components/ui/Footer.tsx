import Link from "next/link";
import { footerListItems } from "./footeritems";

export default function Footer() {
  return (
    <footer className="bg-gray">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <p>Logo</p>
            </div>
            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-black">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {footerListItems[0].quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      className="text-secondary-text transition hover:text-secondary-text/75"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left text-black">
              <p className="text-lg font-medium">Categories</p>

              <ul className="mt-8 space-y-4 text-sm">
                {footerListItems[0].categories.map((item) => (
                  <li key={item.label}>
                    <Link
                      className="text-secondary-text transition hover:text-secondary-text/75"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-500 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left text-secondary-text text-sm">
            <p>
              <span className="block sm:inline">
                © JS Template 2023. All Rights Reserved.
              </span>
            </p>
            <ul className="flex ">
              {footerListItems[0].policies.map((item, idx) => (
                <li
                  className={`${
                    idx < footerListItems[0].policies.length - 1
                      ? "border-r"
                      : ""
                  } px-2`}
                  key={item.label}
                >
                  <Link
                    className="inline-block text-secondary-text hover:text-secondary-text/75"
                    href="#"
                  >
                    Terms of use
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
