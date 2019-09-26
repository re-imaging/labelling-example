let img;
let diagram_button, sensor_button, unsure_button;
let x, y;
let imageList =
	['512.jpg', '171118.jpg', '55685.jpg', '41640.jpg', '161294.jpg', '119145.jpg', '94606.jpg', '12318.jpg', '81674.jpg', '135180.jpg', '166435.jpg', '88950.jpg', '116863.jpg', '113725.jpg', '100418.jpg', '10263.jpg', '107188.jpg', '6875.jpg', '159687.jpg', '121848.jpg', '81734.jpg', '39624.jpg', '153856.jpg', '154580.jpg', '133217.jpg', '149106.jpg', '5600.jpg', '161772.jpg', '125292.jpg', '145409.jpg', '9467.jpg', '169317.jpg', '16795.jpg', '19158.jpg', '34999.jpg', '162889.jpg', '158361.jpg', '19209.jpg', '31444.jpg', '159528.jpg', '41253.jpg', '19789.jpg', '138808.jpg', '22011.jpg', '41143.jpg', '133089.jpg', '108140.jpg', '134224.jpg', '11905.jpg', '16398.jpg', '7692.jpg', '90834.jpg', '19967.jpg', '121213.jpg', '124903.jpg', '18595.jpg', '63035.jpg', '60238.jpg', '17403.jpg', '161580.jpg', '127862.jpg', '18093.jpg', '27731.jpg', '133703.jpg', '150958.jpg', '88809.jpg', '33062.jpg', '22310.jpg', '135194.jpg', '64159.jpg', '64841.jpg', '19289.jpg', '164368.jpg', '156364.jpg', '5765.jpg', '161153.jpg', '170697.jpg', '62943.jpg', '27003.jpg', '147305.jpg', '57456.jpg', '43216.jpg', '80323.jpg', '100930.jpg', '108460.jpg', '111245.jpg', '44472.jpg', '172425.jpg', '124945.jpg', '102597.jpg', '139856.jpg', '153040.jpg', '6234.jpg', '45166.jpg', '49261.jpg', '129597.jpg', '36854.jpg', '77972.jpg', '38244.jpg', '56562.jpg']

// let imageList =
//   ["512.jpg", "5600.jpg", "5765.jpg",
//   "6234.jpg", "6875.jpg", "7692.jpg"]

let accreditations = [
	['Harikrishnan, K P; Ambika, G: Stochastic resonance as a filter for signal detection from multisignal\n  inputs, 2006, <a href="https://arxiv.org/abs/nlin/0606006">https://arxiv.org/abs/nlin/0606006</a>', 'Raskutti, Sudhir; Ostriker, Eve C.; Skinner, M. Aaron: Numerical Simulations of Turbulent, Molecular Clouds Regulated by\n  Radiation Feedback Forces I: Star Formation Rate and Efficiency, 2016, <a href="https://arxiv.org/abs/1608.04469">https://arxiv.org/abs/1608.04469</a>', 'Orgogozo, Axel; Rychkov, Slava: Exploring T and S parameters in Vector Meson Dominance Models of Strong\n  Electroweak Symmetry Breaking, 2011, <a href="https://arxiv.org/abs/1111.3534">https://arxiv.org/abs/1111.3534</a>', 'Wyart, Matthieu: On the Rigidity of Amorphous Solids, 2005, <a href="https://arxiv.org/abs/cond-mat/0512155">https://arxiv.org/abs/cond-mat/0512155</a>', 'Chapman, Harrison: Asymptotic laws for random knot diagrams, 2016, <a href="https://arxiv.org/abs/1608.02638">https://arxiv.org/abs/1608.02638</a>', 'Pohl, Martin: Maximum-Entropy analysis of EGRET data, 1997, <a href="https://arxiv.org/abs/astro-ph/9706152">https://arxiv.org/abs/astro-ph/9706152</a>', 'Gosnell, Natalie M.; Pooley, David; Geller, Aaron M.; Kalirai, Jason; Mathieu, Robert D.; Frinchaboy, Peter; Ramirez-Ruiz, Enrico: An Unexpected Discovery in the Rich Open Cluster NGC 6819 Using\n  XMM-Newton, 2011, <a href="https://arxiv.org/abs/1111.6589">https://arxiv.org/abs/1111.6589</a>', 'Streed, Erik W.; Mun, Jongchul; Boyd, Micah; Campbell, Gretchen K.; Medley, Patrick; Ketterle, Wolfgang; Pritchard, David E.: Continuous and Pulsed Quantum Zeno Effect, 2006, <a href="https://arxiv.org/abs/cond-mat/0606430">https://arxiv.org/abs/cond-mat/0606430</a>', 'Dokuchaev, Nikolai: On causal band-limited mean square approximation, 2011, <a href="https://arxiv.org/abs/1111.6701">https://arxiv.org/abs/1111.6701</a>', 'Bonnefoy, M.; Chauvin, G.; Dougados, C.; Kospal, A.; Benisty, M.; Duchene, G.; Bouvier, J.; Garcia, P. J. V.; Whelan, E.; Antoniucci, S.; Podio, L.: The 2008 outburst in the Young Stellar System Z CMa. III - Multi-epoch\n  high-angular resolution images and spectra of the components in near-infrared, 2016, <a href="https://arxiv.org/abs/1608.08035">https://arxiv.org/abs/1608.08035</a>', 'Queiroz, Farinaldo S.; Siqueira, Clarissa; Valle, José W. F.: Constraining Flavor Changing Interactions from LHC Run-2 Dilepton Bounds\n  with Vector Mediators, 2016, <a href="https://arxiv.org/abs/1608.07295">https://arxiv.org/abs/1608.07295</a>', 'Frank, S.; Rasera, Y.; Vibert, D.; Milliard, B.; Popping, A.; Blaizot, J.; Courty, S.; Deharveng, J. M.; Peroux, C.; Teyssier, R.; Martin, C. D.: Observable Signatures of the low-z Circum-Galactic and Inter-Galactic\n  Medium : UV Line Emission in Simulations, 2011, <a href="https://arxiv.org/abs/1111.3028">https://arxiv.org/abs/1111.3028</a>', 'Jannuzi, Buell T.; Yanny, Brian; Impey, Chris: Imaging of the Host Galaxies of Three X-Ray Selected BL Lacertae Objects, 1997, <a href="https://arxiv.org/abs/astro-ph/9706028">https://arxiv.org/abs/astro-ph/9706028</a>', 'The DELPHI Collaboration, ; Abreu, P.: Search for the sgoldstino at sqrt(s) from 189 to 202 GeV, 2001, <a href="https://arxiv.org/abs/hep-ex/0102044">https://arxiv.org/abs/hep-ex/0102044</a>', 'Matioc, Anca-Voichita: On particle trajectories in linear deep-water waves, 2011, <a href="https://arxiv.org/abs/1111.2490">https://arxiv.org/abs/1111.2490</a>', 'Seto, Richard: An Experimental Overview of Results Presented at SQM 2006, 2006, <a href="https://arxiv.org/abs/nucl-ex/0606034">https://arxiv.org/abs/nucl-ex/0606034</a>', 'Harlander, Robert V.; Kilgore, William B.: Soft and virtual corrections to pp -> H + X at NNLO, 2001, <a href="https://arxiv.org/abs/hep-ph/0102241">https://arxiv.org/abs/hep-ph/0102241</a>', 'Vojta, Thomas; Sknepnek, Rastko: Quantum phase transitions of the diluted O(3) rotor model, 2006, <a href="https://arxiv.org/abs/cond-mat/0606154">https://arxiv.org/abs/cond-mat/0606154</a>', 'Zhu, Hao; Wang, Qing; Yu, Jingyi: Occlusion-Model Guided Anti-Occlusion Depth Estimation in Light Field, 2016, <a href="https://arxiv.org/abs/1608.04187">https://arxiv.org/abs/1608.04187</a>', 'Blanter, Ya. M.; Buttiker, M.: Effect of Interactions on the Admittance of Ballistic Wires, 1997, <a href="https://arxiv.org/abs/cond-mat/9706070">https://arxiv.org/abs/cond-mat/9706070</a>', 'Canning, R. E. A.; Russell, H. R.; Hatch, N. A.; Fabian, A. C.; Zabludoff, A. I.; Crawford, C. S.; King, L. J.; McNamara, B. R.; Okamoto, S.; Raimundo, S. I.: Riding the wake of a merging galaxy cluster, 2011, <a href="https://arxiv.org/abs/1111.0452">https://arxiv.org/abs/1111.0452</a>', 'Danilov, M. V.: Particle Detector R&D, 2005, <a href="https://arxiv.org/abs/physics/0512004">https://arxiv.org/abs/physics/0512004</a>', 'Liu, Kuan; Shi, Xing; Kumar, Anoop; Zhu, Linhong; Natarajan, Prem: Temporal Learning and Sequence Modeling for a Job Recommender System, 2016, <a href="https://arxiv.org/abs/1608.03333">https://arxiv.org/abs/1608.03333</a>', 'Bi, Ying; Chen, He: Accumulate and Jam: Towards Secure Communication via A Wireless-Powered\n  Full-Duplex Jammer, 2016, <a href="https://arxiv.org/abs/1608.01848">https://arxiv.org/abs/1608.01848</a>', 'Le, Triet M: A Multivariate Hawkes Process with Gaps in Observations, 2016, <a href="https://arxiv.org/abs/1608.01282">https://arxiv.org/abs/1608.01282</a>', 'Chen, Xiaozhi; Kundu, Kaustav; Zhu, Yukun; Ma, Huimin; Fidler, Sanja; Urtasun, Raquel: 3D Object Proposals using Stereo Imagery for Accurate Object Class\n  Detection, 2016, <a href="https://arxiv.org/abs/1608.07711">https://arxiv.org/abs/1608.07711</a>', 'Fay, Stephane: Branes: cosmological surprise and observational deception, 2006, <a href="https://arxiv.org/abs/gr-qc/0606076">https://arxiv.org/abs/gr-qc/0606076</a>', 'Li, Zhan; Papaemmanouil, Olga; Cherniack, Mitch: OptMark: A Toolkit for Benchmarking Query Optimizers, 2016, <a href="https://arxiv.org/abs/1608.02611">https://arxiv.org/abs/1608.02611</a>', 'Spasojevic, Nemanja; Bhattacharyya, Prantik; Rao, Adithya: Mining Half a Billion Topical Experts Across Multiple Social Networks, 2016, <a href="https://arxiv.org/abs/1608.09002">https://arxiv.org/abs/1608.09002</a>', 'Yadav, J S; Misra, Ranjeev; Chauhan, Jai Verdhan; Agrawal, P C; Antia, H M; Pahari, Mayukh; Dedhia, Dhiraj; Katoch, Tilak; Madhwani, P.; Manchanda, R K; Paul, B; Shah, Parag; Ishwara-Chandra, C H: AstroSat/LAXPC reveals the high energy variability of GRS 1915+105 in\n  the chi class, 2016, <a href="https://arxiv.org/abs/1608.07023">https://arxiv.org/abs/1608.07023</a>', 'Richter, Johannes; Derzhko, Oleg; Krokhmalskii, Taras: Finite-temperature order-disorder phase transition in a frustrated\n  bilayer quantum Heisenberg antiferromagnet in strong magnetic fields, 2006, <a href="https://arxiv.org/abs/cond-mat/0606806">https://arxiv.org/abs/cond-mat/0606806</a>', 'Lefranc, Valentin; Moulin, Emmanuel; Panci, Paolo; Sala, Filippo; Silk, Joseph: Dark Matter in $\\gamma$ lines: Galactic Center vs dwarf galaxies, 2016, <a href="https://arxiv.org/abs/1608.00786">https://arxiv.org/abs/1608.00786</a>', 'Denig, Achim; collaboration, KLOE: Measurement of the Pion Formfactor with KLOE and Study of the Reaction\n  f0(980) to pi+pi-, 2006, <a href="https://arxiv.org/abs/hep-ex/0606008">https://arxiv.org/abs/hep-ex/0606008</a>', 'De Lucia, Gabriella; Blaizot, Jeremy: The hierarchical formation of the brightest cluster galaxies, 2006, <a href="https://arxiv.org/abs/astro-ph/0606519">https://arxiv.org/abs/astro-ph/0606519</a>', 'Jeffries, R. D.; Evans, P. A.; Pye, J. P.; Briggs, K. R.: An XMM-Newton observation of the young open cluster NGC 2547: coronal\n  activity at 30 Myr, 2005, <a href="https://arxiv.org/abs/astro-ph/0512441">https://arxiv.org/abs/astro-ph/0512441</a>', 'Aberman, Kfir; Eldar, Yonina C.: Sub-Nyquist SAR via Fourier Domain Range Doppler Processing, 2016, <a href="https://arxiv.org/abs/1608.04138">https://arxiv.org/abs/1608.04138</a>', 'Christ, Norman H.; Feng, Xu; Juttner, Andreas; Lawson, Andrew; Portelli, Antonin; Sachrajda, Christopher T.: First exploratory calculation of the long-distance contributions to the\n  rare kaon decays $K\\to\\pi\\ell^+\\ell^-$, 2016, <a href="https://arxiv.org/abs/1608.07585">https://arxiv.org/abs/1608.07585</a>', 'Hsu, Wei-jen; Dutta, Debojyoti; Helmy, Ahmed: Mining Behavioral Groups in Large Wireless LANs, 2006, <a href="https://arxiv.org/abs/cs/0606002">https://arxiv.org/abs/cs/0606002</a>', 'Bednarek, Wlodek: Cascades in the Earth\'s magnetosphere initiated by photons with the\n  parameters of the highest energy AGASA events, 2001, <a href="https://arxiv.org/abs/astro-ph/0109015">https://arxiv.org/abs/astro-ph/0109015</a>', 'Djurašević, G.; Essam, A.; Latković, O.; Cséki, A.; El-Sadek, M. A.; Abo-Elala, M. S.; Hayman, Z. M.: A Photometric Study of Four Recently Discovered Contact Binaries: 1SWASP\n  J064501.21+342154.9, 1SWASP J155822.10-025604.8, 1SWASP J212808.86+151622.0\n  and UCAC4 436-062932, 2016, <a href="https://arxiv.org/abs/1608.06488">https://arxiv.org/abs/1608.06488</a>', 'Ji, Chueng-Ryong; Kang, Gungwon; Lee, Jungjai: Instanton-inspired Model of QCD Phase Transition and Bubble Dynamics, 2005, <a href="https://arxiv.org/abs/hep-ph/0512314">https://arxiv.org/abs/hep-ph/0512314</a>', 'Yalunin, Sergey; Leble, Sergey B.: Multiple scattering and electron-uracil collisions at low energies, 2006, <a href="https://arxiv.org/abs/quant-ph/0606052">https://arxiv.org/abs/quant-ph/0606052</a>', 'Dimarco, Giacomo; Loubère, Raphaël; Narski, Jacek; Rey, Thomas: An efficient numerical method for solving the Boltzmann equation in\n  multidimensions, 2016, <a href="https://arxiv.org/abs/1608.08009">https://arxiv.org/abs/1608.08009</a>', 'Buchlin, E.; Velli, M.: Shell-models of RMHD turbulence and the heating of solar coronal loops, 2006, <a href="https://arxiv.org/abs/astro-ph/0606610">https://arxiv.org/abs/astro-ph/0606610</a>', 'Marcellan, F.; Martinez-Finkelshtein, A.; Martinez-Gonzalez, P.: Electrostatic models for zeros of polynomials: old, new, and some open\n  problems, 2005, <a href="https://arxiv.org/abs/math/0512293">https://arxiv.org/abs/math/0512293</a>', 'Su, Rong: What Information Really Matters in Supervisor Reduction?, 2016, <a href="https://arxiv.org/abs/1608.04104">https://arxiv.org/abs/1608.04104</a>', 'Hannestad, Steen: Strong constraint on large extra dimensions from cosmology, 2001, <a href="https://arxiv.org/abs/hep-ph/0102290">https://arxiv.org/abs/hep-ph/0102290</a>', 'Tsujimoto, Yoshiaki; Sugiura, Yukihiro; Tanaka, Motoki; Ikuta, Rikizo; Miki, Shigehito; Yamashita, Taro; Terai, Hirotaka; Fujiwara, Mikio; Yamamoto, Takashi; Koashi, Masato; Sasaki, Masahide; Imoto, Nobuyuki: A high visibility Hong-Ou-Mandel interference via a time-resolved\n  coincidence measurement, 2016, <a href="https://arxiv.org/abs/1608.04909">https://arxiv.org/abs/1608.04909</a>', 'Matsumura, Soko; Pudritz, Ralph E.; Thommes, Edward W.: Saving Planetary Systems: Dead Zones & Planetary Migration, 2006, <a href="https://arxiv.org/abs/astro-ph/0606237">https://arxiv.org/abs/astro-ph/0606237</a>', 'He, Jingsong; Li, Yinghua; Cheng, Yi: q-Deformed KP Hierarchy and q-Deformed Constrained KP Hierarchy, 2006, <a href="https://arxiv.org/abs/nlin/0606039">https://arxiv.org/abs/nlin/0606039</a>', 'Braaten, Eric; Lu, Meng: Operator Product Expansion in the Production and Decay of the X(3872), 2006, <a href="https://arxiv.org/abs/hep-ph/0606115">https://arxiv.org/abs/hep-ph/0606115</a>', 'Goswami, Sanchari; Das, Tapan Kumar; Biswas, Anindya: Behavior of heat capacity of an attractive Bose-Einstein Condensate\n  approaching collapse, 2011, <a href="https://arxiv.org/abs/1111.0138">https://arxiv.org/abs/1111.0138</a>', 'Achenbach, Patrick: Observation of scattering and absorption centers in lead fluoride\n  crystals, 2006, <a href="https://arxiv.org/abs/nucl-ex/0606027">https://arxiv.org/abs/nucl-ex/0606027</a>', 'Kunszt, Peter: Properties of Renormalization Group Transformations, 1997, <a href="https://arxiv.org/abs/hep-lat/9706019">https://arxiv.org/abs/hep-lat/9706019</a>', 'Karoui, Noureddine El; Purdom, Elizabeth: The bootstrap, covariance matrices and PCA in moderate and\n  high-dimensions, 2016, <a href="https://arxiv.org/abs/1608.00948">https://arxiv.org/abs/1608.00948</a>', 'Romanova, M. M.; Lovelace, R. V. E.: Magnetospheric Gap and Accumulation of Giant Planets Close to the Star, 2006, <a href="https://arxiv.org/abs/astro-ph/0606177">https://arxiv.org/abs/astro-ph/0606177</a>', 'Dong, J. M.; Zuo, W.; Zhang, H. F.; Scheid, W.; Gu, J. Z.; Wang, Y. Z.: Correlation between muonic levels and nuclear structure in muonic atoms, 2011, <a href="https://arxiv.org/abs/1111.0494">https://arxiv.org/abs/1111.0494</a>', 'Ender, K.; Graf, T.; Muhlleitner, M.; Rzehak, H.: Analysis of the NMSSM Higgs Boson Masses at One-Loop Level, 2011, <a href="https://arxiv.org/abs/1111.4952">https://arxiv.org/abs/1111.4952</a>', 'Bernstein, J. P.; Hughes, P. A.: Refining a relativistic, hydrodynamic solver: Admitting\n  ultra-relativistic flows, 2006, <a href="https://arxiv.org/abs/astro-ph/0606012">https://arxiv.org/abs/astro-ph/0606012</a>', 'Chawla, Vikas; Naik, Hsiang Sing; Akintayo, Adedotun; Hayes, Dermot; Schnable, Patrick; Ganapathysubramanian, Baskar; Sarkar, Soumik: A Bayesian Network approach to County-Level Corn Yield Prediction using\n  historical data and expert knowledge, 2016, <a href="https://arxiv.org/abs/1608.05127">https://arxiv.org/abs/1608.05127</a>', 'Li, Mu; Zuo, Wangmeng; Zhang, David: Convolutional Network for Attribute-driven and Identity-preserving Human\n  Face Generation, 2016, <a href="https://arxiv.org/abs/1608.06434">https://arxiv.org/abs/1608.06434</a>', 'Mokiem, M. R.; de Koter, A.; Evans, C. J.; Puls, J.; Smartt, S. J.; Crowther, P. A.; Herrero, A.; Langer, N.; Lennon, D. J.; Najarro, F.; Villamariz, M. R.; Yoon, S. -C.: The VLT-FLAMES survey of massive stars: Mass loss and rotation of\n  early-type stars in the SMC, 2006, <a href="https://arxiv.org/abs/astro-ph/0606403">https://arxiv.org/abs/astro-ph/0606403</a>', 'Kachkachi, H.; Dimian, M.: Hysteretic properties of a magnetic particle with strong surface\n  anisotropy, 2001, <a href="https://arxiv.org/abs/cond-mat/0109411">https://arxiv.org/abs/cond-mat/0109411</a>', 'Vodopivec, Tadej; Lepetit, Vincent; Peer, Peter: Fine Hand Segmentation using Convolutional Neural Networks, 2016, <a href="https://arxiv.org/abs/1608.07454">https://arxiv.org/abs/1608.07454</a>', 'Singh, Anand Pratap; Medida, Shivaji; Duraisamy, Karthik: Machine Learning-augmented Predictive Modeling of Turbulent Separated\n  Flows over Airfoils, 2016, <a href="https://arxiv.org/abs/1608.03990">https://arxiv.org/abs/1608.03990</a>', 'Herbrich, Peter: On inaudible properties of broken drums - Isospectrality with mixed\n  Dirichlet-Neumann boundary conditions, 2011, <a href="https://arxiv.org/abs/1111.6789">https://arxiv.org/abs/1111.6789</a>', 'Penton, Steven V.; Stocke, John T.; Shull, J. Michael: The Local Lya Forest. III. Relationship between Lya Absorbers and\n  Galaxies, Voids and Superclusters, 2001, <a href="https://arxiv.org/abs/astro-ph/0109277">https://arxiv.org/abs/astro-ph/0109277</a>', 'Kunduri, Hari K.; Lucietti, James; Reall, Harvey S.: Gravitational Perturbations of Higher Dimensional Rotating Black Holes:\n  Tensor Perturbations, 2006, <a href="https://arxiv.org/abs/hep-th/0606076">https://arxiv.org/abs/hep-th/0606076</a>', 'Bonnefoy, M.; Chauvin, G.; Dougados, C.; Kospal, A.; Benisty, M.; Duchene, G.; Bouvier, J.; Garcia, P. J. V.; Whelan, E.; Antoniucci, S.; Podio, L.: The 2008 outburst in the Young Stellar System Z CMa. III - Multi-epoch\n  high-angular resolution images and spectra of the components in near-infrared, 2016, <a href="https://arxiv.org/abs/1608.08035">https://arxiv.org/abs/1608.08035</a>', 'Basu, Amitabh; Hildebrand, Robert; Köppe, Matthias: The Triangle Closure is a Polyhedron, 2011, <a href="https://arxiv.org/abs/1111.1780">https://arxiv.org/abs/1111.1780</a>', 'Ramzan, M.: Three-player quantum Kolkata restaurant problem under decoherence, 2011, <a href="https://arxiv.org/abs/1111.3913">https://arxiv.org/abs/1111.3913</a>', 'Gorringe, T. P.: Shell model study of $^{40}$Ca muon capture and the $(0^+,\n  0)$$\\to$$(0^-, 2626)$ axial charge transition, 2006, <a href="https://arxiv.org/abs/nucl-th/0606023">https://arxiv.org/abs/nucl-th/0606023</a>', 'Dodin, Amro; Tscherbul, Timur V.; Brumer, Paul: Coherent dynamics of V-type systems driven by time-dependent incoherent\n  radiation, 2016, <a href="https://arxiv.org/abs/1608.07302">https://arxiv.org/abs/1608.07302</a>', 'Xu, Yangyang: Hybrid Jacobian and Gauss-Seidel proximal block coordinate update\n  methods for linearly constrained convex programming, 2016, <a href="https://arxiv.org/abs/1608.03928">https://arxiv.org/abs/1608.03928</a>', 'Haghi, Hossein; Rahvar, Sohrab; Hasani-Zonooz, Akram: The Magellanic Stream in Modified Newtonian Dynamics, 2006, <a href="https://arxiv.org/abs/astro-ph/0606246">https://arxiv.org/abs/astro-ph/0606246</a>', 'Fitzpatrick, Benjamin R.; Lamb, David W.; Mengersen, Kerrie: Assessing Site Effects and Geographic Transferability when Interpolating\n  Point Referenced Spatial Data: A Digital Soil Mapping Case Study, 2016, <a href="https://arxiv.org/abs/1608.00086">https://arxiv.org/abs/1608.00086</a>', 'Kalafat, Mustafa; Sari, Ramazan: On special submanifolds of the Page space, 2016, <a href="https://arxiv.org/abs/1608.03252">https://arxiv.org/abs/1608.03252</a>', 'Scheeres, D. J.: Minimum Energy Configurations in the $N$-Body Problem and the Celestial\n  Mechanics of Granular Systems, 2011, <a href="https://arxiv.org/abs/1111.4245">https://arxiv.org/abs/1111.4245</a>', 'Kalinkin, B. N.; Gagarin, Yu. F.: New Indications of Changing the Regime of Multiple Production at\n  Superhigh Energies, 2001, <a href="https://arxiv.org/abs/hep-ph/0109175">https://arxiv.org/abs/hep-ph/0109175</a>', 'Kadlecová, Hedvika; Klimo, Ondřej; Weber, Stefan; Korn, Georg: Gravitational wave generation by interaction of high power lasers with\n  matter. Part II: Ablation and Piston models, 2016, <a href="https://arxiv.org/abs/1608.04925">https://arxiv.org/abs/1608.04925</a>', 'Linford, Justin D.; Taylor, Gregory B.; Romani, Roger W.; Helmboldt, Joseph F.; Readhead, Anthony C. S.; Reeves, Rodrigo; Richards, Joseph L.: Contemporaneous VLBA 5 GHz Observations of LAT-Detected Blazars, 2011, <a href="https://arxiv.org/abs/1111.4505">https://arxiv.org/abs/1111.4505</a>', 'Chun, Mark R.; Gharanfoli, Soheila; Kulkarni, Varsha P.; Takamiya, Marianne: Adaptive Optics Imaging of Low-redshift Damped Lyman-alpha Quasar\n  Absorbers, 2005, <a href="https://arxiv.org/abs/astro-ph/0512116">https://arxiv.org/abs/astro-ph/0512116</a>', 'James, Guillaume; Kevrekidis, Panayotis; Cuevas, Jesus: Breathers in oscillator chains with Hertzian interactions, 2011, <a href="https://arxiv.org/abs/1111.1857">https://arxiv.org/abs/1111.1857</a>', 'Ellis, Alexander P.; Khovanov, Mikhail; Lauda, Aaron D.: The odd nilHecke algebra and its diagrammatics, 2011, <a href="https://arxiv.org/abs/1111.1320">https://arxiv.org/abs/1111.1320</a>', 'Bartosch, Lorenz: Fluctuation effects in disordered Peierls systems, 2001, <a href="https://arxiv.org/abs/cond-mat/0102160">https://arxiv.org/abs/cond-mat/0102160</a>', 'Buchalter, Ari; Jimenez, Raul; Kamionkowski, Marc: Galactosynthesis Predictions at High Redshift, 2001, <a href="https://arxiv.org/abs/astro-ph/0102025">https://arxiv.org/abs/astro-ph/0102025</a>', 'Dixon, Lance J.: Twistor String Theory and QCD, 2005, <a href="https://arxiv.org/abs/hep-ph/0512111">https://arxiv.org/abs/hep-ph/0512111</a>', 'Usatenko, Z.; Halun, J.; Kuterba, P.: Ring polymers in confined geometries, 2016, <a href="https://arxiv.org/abs/1608.03117">https://arxiv.org/abs/1608.03117</a>', 'Karoui, Noureddine El; Purdom, Elizabeth: The bootstrap, covariance matrices and PCA in moderate and\n  high-dimensions, 2016, <a href="https://arxiv.org/abs/1608.00948">https://arxiv.org/abs/1608.00948</a>', 'Tubbenhauer, Daniel: Virtual Khovanov homology using cobordisms, 2011, <a href="https://arxiv.org/abs/1111.0609">https://arxiv.org/abs/1111.0609</a>', 'Zhang, Yang; Celardo, G. Luca; Borgonovi, Fausto; Kaplan, Lev: Opening-Assisted Coherent Transport in the Deep Classical Regime, 2016, <a href="https://arxiv.org/abs/1608.08910">https://arxiv.org/abs/1608.08910</a>', 'Faedi, F.; Chew, Y. Gómez Maqueo; Pollacco, D.; Brown, D. J. A.; Hébrard, G.; Smalley, B.; Lam, K. W. F.; Veras, D.; Anderson, D.; Doyle, A. P.; Gillon, M.; Goad, M. R.; Lendl, M.; Mancini, L.; McCormac, J.; Plauchu-Frayn, I.; Prieto-Arranz, J.; Scholz, A.; Street, R.; Triaud, A. H. M.; West, R.; Wheatley, P. J.; Armstrong, D. J.; Barros, S. C. C.; Boisse, I.; Bouchy, F.; Boumis, P.; Cameron, A. Collier; Haswell, C. A.; Hay, K. L.; Hellier, C.; Kolb, U.; Maxted, P. F. L.; Norton, A. J.; Osborn, H. P.; Palle, E.; Pepe, F.; Queloz, D.; Ségransan, D.; Udry, S.; Wilson, P. A.: WASP-86b and WASP-102b: super-dense versus bloated planets, 2016, <a href="https://arxiv.org/abs/1608.04225">https://arxiv.org/abs/1608.04225</a>', 'Lopez-Caniego, M.; Herranz, D.; Gonzalez-Nuevo, J.; Sanz, J. L.; Barreiro, R. B.; Vielva, P.; Argueso, F.; Toffolatti, L.: Comparison of filters for the detection of point sources in Planck\n  simulations, 2006, <a href="https://arxiv.org/abs/astro-ph/0606199">https://arxiv.org/abs/astro-ph/0606199</a>', 'Viki, Joergens: Spectroscopic companions of very young brown dwarfs, 2005, <a href="https://arxiv.org/abs/astro-ph/0512322">https://arxiv.org/abs/astro-ph/0512322</a>', 'Wei, Hao; Cai, Rong-Gen: A Note on Crossing the Phantom Divide in Hybrid Dark Energy Model, 2005, <a href="https://arxiv.org/abs/astro-ph/0512018">https://arxiv.org/abs/astro-ph/0512018</a>', 'Plekhanov, Kirill; Roux, Guillaume; Hur, Karyn Le: Floquet Engineering of Haldane Chern Insulators and Chiral bosonic phase\n  transitions, 2016, <a href="https://arxiv.org/abs/1608.00025">https://arxiv.org/abs/1608.00025</a>', 'Ratkovic, Sasa; Prakash, Madappa; Lattimer, James M.: Roche Lobes in the Second Post-Newtonian Approximation, 2005, <a href="https://arxiv.org/abs/astro-ph/0512133">https://arxiv.org/abs/astro-ph/0512133</a>', 'Eichhorn, Astrid: Quantum fields in the non-perturbative regime - Yang-Mills theory and\n  gravity, 2011, <a href="https://arxiv.org/abs/1111.1237">https://arxiv.org/abs/1111.1237</a>', 'Morizot, Olivier; Colombe, Yves; Lorent, Vincent; Perrin, Hélène; Garraway, Barry M.: A ring trap for ultracold atoms, 2005, <a href="https://arxiv.org/abs/physics/0512015">https://arxiv.org/abs/physics/0512015</a>', 'Chen, Chien-Liang; Chang, Ching-Ray; Nikolic, Branislav K.: Quantum coherence and its dephasing in the giant spin Hall effect and\n  nonlocal voltage generated by magnetotransport through multiterminal graphene\n  bars, 2011, <a href="https://arxiv.org/abs/1111.4892">https://arxiv.org/abs/1111.4892</a>']
]

let counter = 0;

let total_d = 0;
let total_s = 0;
let total_u = 0;

let lastAction = "";

let bComplete = false;

let results = {};
let namekeys = {
  0: "diagram",
  1: "sensor",
  2: "unsure"
};

function setup() {
  var cnv = createCanvas(800, 3000);
//  cnv.position(0, 110); // 65
  cnv.parent('sketch-holder');

  img = loadImage("images/".concat(imageList[counter]));

  x = 10;
  y = 150;

  diagram_button = createButton('diagram');
  diagram_button.position(x, y);
  diagram_button.size(200, 50);
  diagram_button.mousePressed(assign_diagram);
  x += 200;

  sensor_button = createButton('sensor');
  sensor_button.position(x, y);
  sensor_button.size(200, 50);
  sensor_button.mousePressed(assign_sensor);
  x += 200;

  unsure_button = createButton('unsure');
  unsure_button.position(x, y);
  unsure_button.size(200, 50);
  unsure_button.mousePressed(assign_unsure);

  unsure_button = createButton('download results as csv');
  unsure_button.id('download_link');
  unsure_button.position(10, 800);
  unsure_button.size(350, 50);
  unsure_button.mousePressed(download_csv);
    	
	console.log(accreditations[0][0])
	// initialise accreditation
	document.getElementById("accreditation").innerHTML = "<p>".concat(accreditations[counter][0]).concat("</p>");
}

function download_csv() {
  console.log("downloading data")

  // organise results into name,label
  var csvContent = ""
  for(var key in results) {
      var value = results[key];
      csvContent += key.concat(",").concat(namekeys[value]).concat("\n");
    }

  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
  element.setAttribute('download', "labelling_data.csv");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
}

function assign_diagram() {
  console.log("assign diagram");
  results[imageList[counter]] = 0;
  if(!bComplete) {
    total_d += 1;
  }
  next_image();
}

function assign_sensor() {
  console.log("assign sensor");
  results[imageList[counter]] = 1;
  if(!bComplete) {
    total_s += 1;
  }
  next_image();
}

function assign_unsure() {
  console.log("assign unsure");
  results[imageList[counter]] = 2;
  if(!bComplete) {
    total_u += 1;
  }
  next_image();
}

function next_image() {
  if (counter < imageList.length - 1) {
    counter += 1;
    img = loadImage("images/".concat(imageList[counter]));
		document.getElementById("accreditation").innerHTML = "<p>".concat(accreditations[0][counter]).concat("</p>");
  } else {
    img = loadImage("blank.jpg")
    bComplete = true;
		document.getElementById("accreditation").innerHTML = "<p>---</p>";
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    console.log("current results")
    console.log(results)
  } else {
    console.log("some other key pressed")
  }
}

function draw() {
  // white background, make sure not trying to draw anything else in same area
	background(255);
	
  let x = 512;
  let y = 512;
  let ratio = img.height / img.width;
  let xBigger = img.width > img.height ? true : false;
  
//  let verbose = true;
  let verbose = false;
  
  if(verbose) {
    console.log("xBigger: ".concat(xBigger));
    console.log("img.width: ".concat(img.width));
    console.log("img.height: ".concat(img.height));
  }
  
  // resize image based on which axis is bigger
  if(xBigger) {
    if(true) {
      x = 512;
      y = 512 * (img.height / img.width);
    }
  } else {
    if(true) {
      y = 512;
      x = 512 * (img.width / img.height);
    }
  }
  if(verbose) {
    console.log("x: ".concat(x));
    console.log("y: ".concat(y));
  }
  
  image(img, 20, 80, x, y);

  if(true) {
    text(str(counter + 1).concat(" / ").concat(imageList.length), 20, 760)
  }

  let ypos = 750 + 50;
  for(var key in results) {
    var value = results[key];
    text(key.concat(": ").concat(namekeys[value]), 20, ypos)
    ypos += 20;
  }
  // text(results, 20, img.height + 30);

  text("// totals", 256, 800);
  text("diagram: ".concat(total_d), 256, 820);
  text("sensor: ".concat(total_s), 256, 840);
  text("unsure: ".concat(total_u), 256, 860);

  if(bComplete === true) {
    text("all images labelled", 100, 100);
  }
}
