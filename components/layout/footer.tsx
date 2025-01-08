export function Footer() {
  const links = [
    {
      title: "Popular",
      items: ["Canmore", "Benalmádena", "Marbella", "Mijas", "Prescott"],
    },
    {
      title: "Trending",
      items: ["Tulum", "Jasper", "Mountain View", "Davenport", "Malacca"],
    },
    {
      title: "Categories",
      items: [
        "Amazing pools",
        "Beach front",
        "Tiny homes",
        "Islands",
        "National parks",
      ],
    },
  ];

  return (
    <footer className="border-t mt-12 py-8">
      <div className="max-w-screen-2xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">
          Inspiration for future getaways
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {links.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
