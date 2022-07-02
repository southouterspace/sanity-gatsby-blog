export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62c04ef8c5898447026e2281",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ri3czwzp",
                  apiId: "e4dbe2dc-5020-4084-a330-14133e731ba5",
                },
                {
                  buildHookId: "62c04ef96049b948e3ddad42",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-a1wmpip9",
                  apiId: "dcfd0fb8-2fdf-4ce5-8b8b-a41bd0be8846",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/southouterspace/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-a1wmpip9.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
