const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-6xl xs:text-5xl text-4xl lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-normal lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  // Markdown Editor styles
  mdEditor: "w-full min-h-[calc(50vh-2rem)]", // Layout & sizing
  mdEditorTypography: "prose prose-invert max-w-none", // Typography
  mdEditorUI: "p-4 text-white", // Basic UI styles without focus ring
  mdEditorSpacing: "mt-4", // Spacing/margins

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export { styles };
