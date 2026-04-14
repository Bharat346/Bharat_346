export const research = [
  {
    title: "Semantic Communication of Images",
    status: "Ongoing",
    organization: "NIT Delhi",
    mentor: "Dr. Gautam",
    driveLink: "https://drive.google.com/drive/folders/13zK0KZOU7msW_98d4ltLgU9KNkAoEaAl",
    problemStatement:
      "Conventional communication systems focus on bit-perfect transmission, often wasting bandwidth on perceptually irrelevant details. As data demands grow, traditional source coding hits the Shannon limit.",
    whyItMatters:
      "Semantic communication enables ultra-low bandwidth transmission by sending only the 'meaning' or 'features' of an image, which is crucial for 6G, remote sensing, and IoT devices with limited power.",
    approach:
      "(1) VIT Transformer ( Vision Transformer ) is now a days used for image reconstruction and it is a new approach for image reconstruction. So first I am implementing the VIT Transformer for image encoding and decoding and then i calculates the PSNR and MS-SSIM to evaluate the performance of the model.",
    tools: ["PyTorch", "Autoencoders", "Generative AI", "Information Theory", "Computer Vision"],
    progress: "Implementing a robust pipeline for image reconstruction using DIV2K dataset, integrating AWGN, other Noises and Binary Symmetric Channel simulations.",
    expectedOutcome:
      "A framework that maintains high perceptual quality even at extremely low SNR.",
    log: [
      {
        week: "Week 1-2",
        update: "Literature review on VIT Transformer and analyze the methodology of the paper.",
        learnings: "Understanding the working of VIT Transformer and how it is used for image reconstruction.",
      },
      {
        week: "Week 3-4",
        update: "Designing and training the baseline autoencoder model of VIT Transformer.",
        description: "Focused on neural network architecture design, specifically exploring the bottleneck layer of VIT Transformer to balance compression ratio with feature preservation.",
        learnings: "Basic Model Training and Evaluation",
      },
    ],
  },
] as const;
