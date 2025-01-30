const services = [
    { icon: "fas fa-clipboard-list", title: "Request Something", description: "Browse the catalog for services and items you need" },
    { icon: "fas fa-book", title: "Knowledge Base", description: "Browse and search for articles, submit feedback" },
    { icon: "fas fa-life-ring", title: "Get Help", description: "Contact support for help" },
    { icon: "fas fa-users", title: "Community", description: "Community-based answers to questions" },
  ];
  
  const ServicesSection = () => {
    return (
      <section className="bg-[#005f7a] bg-opacity-40 py-6 px-4 flex flex-wrap justify-center gap-8 text-center shadow-md rounded-lg">
        {services.map((service, index) => (
          <div key={index}>
            <i className={`${service.icon} text-green-600 text-2xl`}></i>
            <h2 className="text-lg font-semibold">{service.title}</h2>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </section>
    );
  };
  export default ServicesSection;
  