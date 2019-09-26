let img;
let diagram_button, sensor_button, unsure_button;
let x, y;
let imageList =

  ['56562.jpg', '38244.jpg', '77972.jpg', '36854.jpg', '129597.jpg', '49261.jpg', '45166.jpg',
  '6234.jpg', '153040.jpg', '139856.jpg', '102597.jpg', '124945.jpg', '172425.jpg', '44472.jpg', '111245.jpg',
  '108460.jpg', '100930.jpg', '80323.jpg', '43216.jpg', '57456.jpg', '147305.jpg', '27003.jpg', '62943.jpg',
  '170697.jpg', '161153.jpg', '5765.jpg', '156364.jpg', '164368.jpg', '19289.jpg', '64841.jpg', '64159.jpg',
  '135194.jpg', '22310.jpg', '33062.jpg', '88809.jpg', '150958.jpg', '133703.jpg', '27731.jpg', '18093.jpg',
  '127862.jpg', '161580.jpg', '17403.jpg', '60238.jpg', '63035.jpg', '18595.jpg', '124903.jpg', '121213.jpg',
  '19967.jpg', '90834.jpg', '7692.jpg', '16398.jpg', '11905.jpg', '134224.jpg', '108140.jpg', '133089.jpg',
  '41143.jpg', '22011.jpg', '138808.jpg', '19789.jpg', '41253.jpg', '159528.jpg', '31444.jpg', '19209.jpg',
  '158361.jpg', '162889.jpg', '34999.jpg', '19158.jpg', '16795.jpg', '169317.jpg', '9467.jpg', '145409.jpg',
  '125292.jpg', '161772.jpg', '5600.jpg', '149106.jpg', '133217.jpg', '154580.jpg', '153856.jpg', '39624.jpg',
  '81734.jpg', '121848.jpg', '159687.jpg', '6875.jpg', '107188.jpg', '10263.jpg', '100418.jpg', '113725.jpg',
  '116863.jpg', '88950.jpg', '166435.jpg', '135180.jpg', '81674.jpg', '12318.jpg', '94606.jpg', '119145.jpg',
  '161294.jpg', '41640.jpg', '55685.jpg', '171118.jpg', '512.jpg']

// let imageList =
//   ["512.jpg", "5600.jpg", "5765.jpg",
//   "6234.jpg", "6875.jpg", "7692.jpg"]

let accreditations = [
	[['Lewis, Andrew E. M.: "\\Pi^0_1 classes, strong minimal covers and hyperimmune-free degrees", 2007, <a href="https://arxiv.org/abs/0711.0287">https://arxiv.org/abs/0711.0287</a>'], ['Brandenburg, A.; Rekowski, B. v.: "Astrophysical significance of the anisotropic kinetic alpha effect", 2001, <a href="https://arxiv.org/abs/astro-ph/0106280">https://arxiv.org/abs/astro-ph/0106280</a>'], ['Fradkin, Eduardo: "Electronic Liquid Crystal Phases in Strongly Correlated Systems", 2010, <a href="https://arxiv.org/abs/1004.1104">https://arxiv.org/abs/1004.1104</a>'], ['Sabhapandit, Sanjib: "Hysteresis and Avalanches in the Random Field Ising Model", 2002, <a href="https://arxiv.org/abs/cond-mat/0209569">https://arxiv.org/abs/cond-mat/0209569</a>'], ['Di Cerbo, Gabriele: "On Fujita\'s spectrum conjecture", 2016, <a href="https://arxiv.org/abs/1603.09315">https://arxiv.org/abs/1603.09315</a>'], ['Brinks, Ralph: "Surveillance of the Incidence of Noncommunicable Diseases (NCDs) with\n  Prevalence Data: Theory and Application to Diabetes in Denmark", 2013, <a href="https://arxiv.org/abs/1303.1442">https://arxiv.org/abs/1303.1442</a>'], ['Kob, Walter; Andersen, Hans C.: "Scaling behavior in the dynamics of a supercooled Lennard-Jones mixture", 1994, <a href="https://arxiv.org/abs/cond-mat/9407120">https://arxiv.org/abs/cond-mat/9407120</a>'], ['Leong, Hon-Wai; Chew, Lock-Yue; Huang, Kerson: "Hamiltonian Dynamics of the Protein Chain and Normal Modes of\n  Alpha-Helix and Beta-Sheet", 2008, <a href="https://arxiv.org/abs/0809.1937">https://arxiv.org/abs/0809.1937</a>'], ['Kaboth, A.; Formaggio, J. A.; Monreal, B.: "Sensitivity of Neutrino Mass Experiments to the Cosmic Neutrino\n  Background", 2010, <a href="https://arxiv.org/abs/1006.1886">https://arxiv.org/abs/1006.1886</a>'], ['Martínez-Pañeda, Emilio; Golahmar, Alireza; Niordson, Christian F.: "A phase field formulation for hydrogen assisted cracking", 2018, <a href="https://arxiv.org/abs/1808.03264">https://arxiv.org/abs/1808.03264</a>'], ['Hu, Yongchang; Leus, Geert: "Self-Estimation of Path-Loss Exponent in Wireless Networks and\n  Applications", 2018, <a href="https://arxiv.org/abs/1807.04070">https://arxiv.org/abs/1807.04070</a>'], ['Ovadyahu, Z.: "Optical excitation of Electron-Glasses", 2011, <a href="https://arxiv.org/abs/1105.1350">https://arxiv.org/abs/1105.1350</a>'], ['Ghiassian, Sina; Yu, Huizhen; Rafiee, Banafsheh; Sutton, Richard S.: "Two geometric input transformation methods for fast online reinforcement\n  learning with neural nets", 2018, <a href="https://arxiv.org/abs/1805.07476">https://arxiv.org/abs/1805.07476</a>'], ['Khan, Sumanta; Bharti, Vineet; Natarajan, Vasant: "Coherent population pumping in a bright state", 2017, <a href="https://arxiv.org/abs/1706.04384">https://arxiv.org/abs/1706.04384</a>'], ['Samokhin, K. V.; Mitrovic, B.: "Nodal quasiparticles and classical phase fluctuations in d-wave\n  superconductors", 2003, <a href="https://arxiv.org/abs/cond-mat/0308229">https://arxiv.org/abs/cond-mat/0308229</a>'], ['Bahmani, Asghar: "Convex functions on graphs: Sum of the eigenvalues", 2018, <a href="https://arxiv.org/abs/1809.03996">https://arxiv.org/abs/1809.03996</a>'], ['Reichhardt, C.; Bairnsfather, C.; Reichhardt, C. J. Olson: "Positive and Negative Drag, Dynamic Phases, and Commensurability in\n  Coupled One-Dimensional Channels of Particles with Yukawa Interactions", 2010, <a href="https://arxiv.org/abs/1012.1866">https://arxiv.org/abs/1012.1866</a>'], ['Hamilton, Timothy S.; Casertano, Stefano; Turnshek, David A.: "The Fundamental Plane of Quasars", 2005, <a href="https://arxiv.org/abs/astro-ph/0511544">https://arxiv.org/abs/astro-ph/0511544</a>'], ['Roshi, D. Anish; Shillue, W.; Fisher, J. R.; Morgan, M.; Castro, J.; Groves, W.; Boyd, T.; Simon, B.; Hawkins, L.; van Tonder, V.; Nelson, J. D.; Ray, J.; Chamberlain, T.; White, S.; Black, R.; Warnick, K. F.; Jeffs, B.; Prestage, R.: "A Highly-Sensitive Cryogenic Phased Array Feed for the Green Bank\n  Telescope", 2017, <a href="https://arxiv.org/abs/1711.02204">https://arxiv.org/abs/1711.02204</a>'], ['Dimitrijevic, Marija; Meyer, Frank; Möller, Lutz; Wess, Julius: "Gauge theories on the kappa-Minkowski spacetime", 2003, <a href="https://arxiv.org/abs/hep-th/0310116">https://arxiv.org/abs/hep-th/0310116</a>'], ['Kitano, Ryuichiro; Nakamura, Mitsutoshi: "Tau polarization measurements at the LHC in supersymmetric models with a\n  long-lived stau", 2010, <a href="https://arxiv.org/abs/1006.2904">https://arxiv.org/abs/1006.2904</a>'], ['Deng, Mo; Emad, Amin; Milenkovic, Olgica: "Casual Compressive Sensing for Gene Network Inference", 2012, <a href="https://arxiv.org/abs/1202.5678">https://arxiv.org/abs/1202.5678</a>'], ['Dowerah, Uddipana; Krishnaswamy, Srinivasan: "A Somewhat Homomorphic Encryption Scheme based on Multivariate\n  Polynomial Evaluation", 2019, <a href="https://arxiv.org/abs/1902.05771">https://arxiv.org/abs/1902.05771</a>'], ['Nakajima, Tadashi; Matsuhara, Hideo: "Sensitivity of an Imaging Space Infrared Interferometer", 2000, <a href="https://arxiv.org/abs/astro-ph/0011309">https://arxiv.org/abs/astro-ph/0011309</a>'], ['Palumbo, Fabrizio: "The quark-composites approach to QCD: The nucleon-pion interaction", 1999, <a href="https://arxiv.org/abs/hep-lat/9905013">https://arxiv.org/abs/hep-lat/9905013</a>'], ['Cyrta, Pawel; Trzciński, Tomasz; Stokowiec, Wojciech: "Speaker Diarization using Deep Recurrent Convolutional Neural Networks\n  for Speaker Embeddings", 2017, <a href="https://arxiv.org/abs/1708.02840">https://arxiv.org/abs/1708.02840</a>'], ['Javaraiah, J.: "Long-Term Variations in the Growth and Decay Rates of Sunspot Groups", 2011, <a href="https://arxiv.org/abs/1105.1066">https://arxiv.org/abs/1105.1066</a>'], ['Suzuki, Jun: "Creation of excitations from a uniform impurity motion in the condensate", 2013, <a href="https://arxiv.org/abs/1305.6749">https://arxiv.org/abs/1305.6749</a>'], ['Andrade, Eric C.; Jagannathan, Anuradha; Miranda, Eduardo; Vojta, Matthias; Dobrosavljević, Vladimir: "Non-Fermi-Liquid Behavior in Metallic Quasicrystals with Local Magnetic\n  Moments", 2014, <a href="https://arxiv.org/abs/1412.3807">https://arxiv.org/abs/1412.3807</a>'], ['Bohr, Christian: "Immersed projective planes, Arf invariants and even 4-manifolds", 2002, <a href="https://arxiv.org/abs/math/0201163">https://arxiv.org/abs/math/0201163</a>'], ['Rosswog, Stephan; Ramirez-Ruiz, Enrico: "On the Central Engine of short Gamma-ray Bursts", 2003, <a href="https://arxiv.org/abs/astro-ph/0309201">https://arxiv.org/abs/astro-ph/0309201</a>'], ['Mani, Arjun; Benjamin, Colin: "Probing helicity and the topological origins of helicity via non-local\n  Hanbury-Brown and Twiss correlations", 2016, <a href="https://arxiv.org/abs/1609.03978">https://arxiv.org/abs/1609.03978</a>'], ['Aboulker, Pierre; Bonamy, Marthe; Bousquet, Nicolas; Esperet, Louis: "Distributed coloring in sparse graphs with fewer colors", 2018, <a href="https://arxiv.org/abs/1802.05582">https://arxiv.org/abs/1802.05582</a>'], ['Elizalde, E.; Kawamura, M.; Nojiri, S.; Odintsov, S. D.; Sugamoto, A.: "Quantum effects of stringy and membranic nature for the swimming of\n  micro-organisms in a fluid", 1995, <a href="https://arxiv.org/abs/hep-th/9511167">https://arxiv.org/abs/hep-th/9511167</a>'], ['Hasenbusch, Martin; Hasenfratz, Peter; Niedermayer, Ferenc; Seefeld, Bernhard; Wolff, Ulli: "Nonstandard Cutoff Effects in the Nonlinear Sigma Model", 2001, <a href="https://arxiv.org/abs/hep-lat/0110202">https://arxiv.org/abs/hep-lat/0110202</a>'], ['Biller, Beth A.; Liu, Michael C.; Wahhaj, Zahed; Nielsen, Eric L.; Hayward, Thomas L.; Males, Jared R.; Skemer, Andrew; Close, Laird M.; Chun, Mark; Ftaclas, Christ; Clarke, Fraser; Thatte, Niranjan; Shkolnik, Evgenya L.; Reid, I. Neill; Hartung, Markus; Boss, Alan; Lin, Douglas; Alencar, Silvia H. P.; Pino, Elisabete de Gouveia Dal; Gregorio-Hetem, Jane; Toomey, Douglas: "The Gemini NICI Planet-Finding Campaign: The Frequency of Planets around\n  Young Moving Group Stars", 2013, <a href="https://arxiv.org/abs/1309.1462">https://arxiv.org/abs/1309.1462</a>'], ['Shi, F.; Kong, X.: "Star Formation Rate Indicators in WISE/SDSS", 2013, <a href="https://arxiv.org/abs/1312.1781">https://arxiv.org/abs/1312.1781</a>'], ['Odintsov, S.; Percacci, R.: "Yang-Mills vacuum structure and quantum gravity", 1996, <a href="https://arxiv.org/abs/hep-th/9606198">https://arxiv.org/abs/hep-th/9606198</a>'], ['Giedt, Joel: "A deconstruction lattice description of the D1/D5 brane world-volume\n  gauge theory", 2006, <a href="https://arxiv.org/abs/hep-lat/0605004">https://arxiv.org/abs/hep-lat/0605004</a>'], ['Halimi, Anisa; Ayday, Erman: "Profile Matching Across Unstructured Online Social Networks: Threats and\n  Countermeasures", 2017, <a href="https://arxiv.org/abs/1711.01815">https://arxiv.org/abs/1711.01815</a>'], ['Thomas, David: "Monte-Carlo Analysis of Big Bang Production of Beryllium and Boron", 1994, <a href="https://arxiv.org/abs/astro-ph/9412039">https://arxiv.org/abs/astro-ph/9412039</a>'], ['Rognon, Pierre; Gay, Cyprien: "Soft Dynamics simulation: 2. Elastic spheres undergoing a T1 process in\n  a viscous fluid", 2009, <a href="https://arxiv.org/abs/0901.0171">https://arxiv.org/abs/0901.0171</a>'], ['van Erven, Tim; Szabo, Botond: "Fast Exact Bayesian Inference for Sparse Signals in the Normal Sequence\n  Model", 2018, <a href="https://arxiv.org/abs/1810.10883">https://arxiv.org/abs/1810.10883</a>'], ['Portaluri, Alessandro; Waterstraat, Nils: "Yet another proof of the Morse index theorem", 2013, <a href="https://arxiv.org/abs/1312.5291">https://arxiv.org/abs/1312.5291</a>'], ['Dunn, R. J. H.; Fabian, A. C.; Celotti, A.: "Using Radio Bubbles to Constrain the Matter Content of AGN Jets", 2006, <a href="https://arxiv.org/abs/astro-ph/0608466">https://arxiv.org/abs/astro-ph/0608466</a>'], ['Chen, Dong; Chen, Ping; Christ, Norman H.; Edwards, Robert G.; Fleming, George R.; Gara, Alan; Hansen, Sten; Jung, Chulwoo; Kaehler, Adrian L.; Kennedy, Anthony D.; Kilcup, Gregory W.; Luo, Yubing; Malureanu, Catalin I.; Mawhinney, Robert D.; Parsons, John; Sui, ChengZhong; Vranas, Pavlos M.; Zhestkov, Yuri: "Status of the QCDSP project", 1998, <a href="https://arxiv.org/abs/hep-lat/9810004">https://arxiv.org/abs/hep-lat/9810004</a>'], ['Ugoccioni, Roberto: "Structures in Multiplicity Distributions and Oscillations of Moments", 1996, <a href="https://arxiv.org/abs/hep-ph/9610483">https://arxiv.org/abs/hep-ph/9610483</a>'], ['Zdziarski, Andrzej A.; Stawarz, Lukasz; Pjanka, Patryk; Sikora, Marek: "Jet models for black-hole binaries in the hard spectral state", 2013, <a href="https://arxiv.org/abs/1307.1309">https://arxiv.org/abs/1307.1309</a>'], ['Matthews, D.; Staveley-Smith, L.; Dyson, P.; Muller, E.: "Cool Gas in the Magellanic Stream", 2009, <a href="https://arxiv.org/abs/0901.3415">https://arxiv.org/abs/0901.3415</a>'], ['Frebel, Anna; Beers, Timothy C.: "The formation of the heaviest elements", 2018, <a href="https://arxiv.org/abs/1801.01190">https://arxiv.org/abs/1801.01190</a>'], ['Stoichev, Stoicho D.: "Experimental Results of the Search for Unitals in Projective Planes of\n  Order 25", 2012, <a href="https://arxiv.org/abs/1211.0596">https://arxiv.org/abs/1211.0596</a>'], ['Munier, S.; Shoshi, A.: "Diffractive photon dissociation in the saturation regime from the Good\n  and Walker picture", 2003, <a href="https://arxiv.org/abs/hep-ph/0312022">https://arxiv.org/abs/hep-ph/0312022</a>'], ['Heyl, Jeremy S.; Penrice, Matthew: "Constraining white-dwarf kicks in globular clusters : IV. Retarding Core\n  Collapse", 2009, <a href="https://arxiv.org/abs/0901.1872">https://arxiv.org/abs/0901.1872</a>'], ['Mortazavi, Bohayra; Quey, Romain; Ostadhossein, Alireza; Villani, Aurelien; Moulin, Nicolas; van Duin, Adri C. T.; Rabczuk, Timon: "Strong thermal transport along polycrystalline transition metal\n  dichalcogenides revealed by multiscale modelling for MoS2", 2017, <a href="https://arxiv.org/abs/1703.07640">https://arxiv.org/abs/1703.07640</a>'], ['Hertling, Peter; Spandl, Christoph: "Computing a Solution of Feigenbaum\'s Functional Equation in Polynomial\n  Time", 2014, <a href="https://arxiv.org/abs/1410.3277">https://arxiv.org/abs/1410.3277</a>'], ['Buchel, A.; Tseytlin, A. A.: "Curved space resolution of singularity of fractional D3-branes on\n  conifold", 2001, <a href="https://arxiv.org/abs/hep-th/0111017">https://arxiv.org/abs/hep-th/0111017</a>'], ['Sun, Hong; Sang, Cheng-Wei; Liu, Chen-Guang: "Principal Basis Analysis in Sparse Representation", 2015, <a href="https://arxiv.org/abs/1511.07927">https://arxiv.org/abs/1511.07927</a>'], ['Macfarlane, A. J.; Pfeiffer, Hendryk: "Representations of the exceptional and other Lie algebras with integral\n  eigenvalues of the Casimir operator", 2002, <a href="https://arxiv.org/abs/math-ph/0208014">https://arxiv.org/abs/math-ph/0208014</a>'], ['Braun, Benjamin; Zeckner, Matthew: "Deformation Retracts of Neighborhood Complexes of Stable Kneser Graphs", 2011, <a href="https://arxiv.org/abs/1102.1984">https://arxiv.org/abs/1102.1984</a>'], ['Basak, Soumen; Delabrouille, Jacques: "A needlet ILC analysis of WMAP 9-year polarisation data: CMB\n  polarisation power spectra", 2012, <a href="https://arxiv.org/abs/1204.0292">https://arxiv.org/abs/1204.0292</a>'], ['Eufrasio, R. T.; Lehmer, B. D.; Zezas, A.; Dwek, E.; Arendt, R. G.; Basu-Zych, A.; Wiklind, T.; Yukita, M.; Fragos, T.; Hornschemeier, A. E.; Markwardt, L.; Ptak, A.; Tzanavaris, P.: "On the Spatially Resolved Star Formation History in M51 I: Hybrid UV+IR\n  Star Formation Laws and IR Emission from Dust Heated by Old Stars", 2017, <a href="https://arxiv.org/abs/1710.09401">https://arxiv.org/abs/1710.09401</a>'], ['Shein, I. R.; Ivanovskii, A. L.: "Structural, electronic properties and Fermi surface of ThCr2Si2-type\n  tetragonal KFe2S2, KFe2Se2, and KFe2Te2 phases as parent systems of new\n  ternary iron-chalcogenide superconductors", 2011, <a href="https://arxiv.org/abs/1102.4173">https://arxiv.org/abs/1102.4173</a>'], ['Reis, R. C.; Miller, J. M.: "On the size and location of the X-ray emitting coronae around black\n  holes", 2013, <a href="https://arxiv.org/abs/1304.4947">https://arxiv.org/abs/1304.4947</a>'], ['Belitsky, A. V.; Müller, D.; Niedermeier, L.; Schäfer, A.: "Leading twist asymmetries in deeply virtual Compton scattering", 2000, <a href="https://arxiv.org/abs/hep-ph/0004059">https://arxiv.org/abs/hep-ph/0004059</a>'], ['Morimae, Tomoyuki: "How to upload a physical state to the correlation space", 2010, <a href="https://arxiv.org/abs/1007.5018">https://arxiv.org/abs/1007.5018</a>'], ['Kim, Jeong San; Sanders, Barry C.: "Unified entropy, entanglement measures and monogamy of multi-party\n  entanglement", 2011, <a href="https://arxiv.org/abs/1104.1675">https://arxiv.org/abs/1104.1675</a>'], ['Patil, G. S.; Ghatage, S. R.; Gaikwad, P. K.; Kamat, R. K.; Dongale, T. D.: "Time and Frequency Domain Investigation of Selected Memristor based\n  Analog Circuits", 2016, <a href="https://arxiv.org/abs/1602.03494">https://arxiv.org/abs/1602.03494</a>'], ['Weidinger, Matthias; Spanier, Felix: "Modelling the emission from blazar jets - the case of PKS 2155-304", 2010, <a href="https://arxiv.org/abs/1005.4999">https://arxiv.org/abs/1005.4999</a>'], ['Acosta, Victor M.; Bouchard, Louis S.; Budker, Dmitry; Folman, Ron; Lenz, Till; Maletinsky, Patrick; Rohner, Dominik; Schlussel, Yechezkel; Thiel, Lucas: "Color centers in diamond as novel probes of superconductivity", 2018, <a href="https://arxiv.org/abs/1808.03282">https://arxiv.org/abs/1808.03282</a>'], ['Zannotti, Alessandro; Diebel, Falko; Boguslawski, Martin; Denz, Cornelia: "Optical catastrophes of the swallowtail and butterfly beams", 2017, <a href="https://arxiv.org/abs/1703.07716">https://arxiv.org/abs/1703.07716</a>'], ['Bandyopadhyay, Antar; Kaur, Gursharn: "Generalized P\\\'olya Urn Schemes with Negative but Linear Reinforcements", 2018, <a href="https://arxiv.org/abs/1801.02380">https://arxiv.org/abs/1801.02380</a>'], ['Kovner, A.; Shifman, M.; Smilga, A.: "Domain Walls in Supersymmetric Yang-Mills Theories", 1997, <a href="https://arxiv.org/abs/hep-th/9706089">https://arxiv.org/abs/hep-th/9706089</a>'], ['Ao, P.: "Quantitative Resolution to some "Absolute Discrepancies" in Cancer\n  Theories: a View from Phage lambda Genetic Switch", 2007, <a href="https://arxiv.org/abs/0704.0429">https://arxiv.org/abs/0704.0429</a>'], ['Campisi, Michele; Fazio, Rosario: "Universality and scaling of optimal heat engines", 2015, <a href="https://arxiv.org/abs/1510.06183">https://arxiv.org/abs/1510.06183</a>'], ['Fang, Zheyu; Cai, Junyi; Yan, Zhongbo; Grady, Nathaniel K.; Zhu, Xing: "Fano Resonances of Plasmonic Nanodisk", 2011, <a href="https://arxiv.org/abs/1105.1568">https://arxiv.org/abs/1105.1568</a>'], ['Ottosen, Iver: "On vector bundles for a Morse decomposition of\n  $L({\\mathbb{C}\\mathrm{P}}^n)$", 2016, <a href="https://arxiv.org/abs/1601.07405">https://arxiv.org/abs/1601.07405</a>'], ['Leffert, Charles B.: "A Closed Non-Collapsing 3-D Universe Predicting A New Source of Gravity\n  and Dark Mass", 2001, <a href="https://arxiv.org/abs/astro-ph/0102318">https://arxiv.org/abs/astro-ph/0102318</a>'], ['Gairing, Jan; Högele, Michael; Kosenkova, Tetiana: "Transportation distances and noise sensitivity of multiplicative L\\\'evy\n  SDE with applications", 2015, <a href="https://arxiv.org/abs/1511.07666">https://arxiv.org/abs/1511.07666</a>'], ['Capozziello, S.; de Ritis, R.; Marino, A. A.: "The effective cosmological constant in higher order gravity theories", 1998, <a href="https://arxiv.org/abs/gr-qc/9806043">https://arxiv.org/abs/gr-qc/9806043</a>'], ['Chen, Chih-Whi; Lam, Ngau: "Projective modules over classical Lie algebras of infinite rank in the\n  parabolic category", 2018, <a href="https://arxiv.org/abs/1802.02112">https://arxiv.org/abs/1802.02112</a>'], ['Woolley, M. J.; Doherty, A. C.; Milburn, G. J.; Schwab, K. C.: "Nanomechanical squeezing with detection via a microwave cavity", 2008, <a href="https://arxiv.org/abs/0803.1757">https://arxiv.org/abs/0803.1757</a>'], ['Poggi, P. M.; Arranz, F. J.; Benito, R. M.; Borondo, F.; Wisniacki, D. A.: "Maximum population transfer in a periodically driven two-level system", 2014, <a href="https://arxiv.org/abs/1406.3755">https://arxiv.org/abs/1406.3755</a>'], ['Olsen, M. K.; Corney, J. F.: "Tripartite and bipartite entanglement in continuous-variable tripartite\n  systems", 2015, <a href="https://arxiv.org/abs/1510.04506">https://arxiv.org/abs/1510.04506</a>'], ['Gonzalez-Garcia, M. C.; Peña-Garay, C.; Smirnov, A. Yu.: "Zenith angle distributions at Super-Kamiokande and SNO and the solution\n  of the solar neutrino problem", 2000, <a href="https://arxiv.org/abs/hep-ph/0012313">https://arxiv.org/abs/hep-ph/0012313</a>'], ['Cheng, Hsin-Chia: "Supersymmetric Lepton Flavor Violation at the NLC", 1997, <a href="https://arxiv.org/abs/hep-ph/9704289">https://arxiv.org/abs/hep-ph/9704289</a>'], ['Zhou, Ming; Liu, Jingfeng; Kats, Mikhail; Yu, Zongfu: "Atomic metasurfaces for manipulation of single photons", 2016, <a href="https://arxiv.org/abs/1605.04476">https://arxiv.org/abs/1605.04476</a>'], ['Gluzman, S.; Yukalov, V. I.: "Critical indices from self-similar root approximants", 2017, <a href="https://arxiv.org/abs/1712.06940">https://arxiv.org/abs/1712.06940</a>'], ['Fernando, Neranga; Rashid, Mohammad: "Fibonacci self-reciprocal polynomials and Fibonacci permutation\n  polynomials", 2017, <a href="https://arxiv.org/abs/1712.07723">https://arxiv.org/abs/1712.07723</a>'], ['Han, Shuangfeng; I, Chih-Lin; Dai, Linglong; Sun, Qi; Xu, Zhikun: "Full Duplex Networking: Mission Impossible?", 2014, <a href="https://arxiv.org/abs/1410.5326">https://arxiv.org/abs/1410.5326</a>'], ['Massey, Richard; Hoekstra, Henk; Kitching, Thomas; Rhodes, Jason; Cropper, Mark; Amiaux, Jerome; Harvey, David; Mellier, Yannick; Meneghetti, Massimo; Miller, Lance; Paulin-Henriksson, Stephane; Pires, Sandrine; Scaramella, Roberto; Schrabback, Tim: "Origins of weak lensing systematics, and requirements on future\n  instrumentation (or knowledge of instrumentation)", 2012, <a href="https://arxiv.org/abs/1210.7690">https://arxiv.org/abs/1210.7690</a>'], ['Nikulov, A. V.: "Contradiction between assumption on superposition of flux-qubit states\n  and the law of angular momentum conservation", 2009, <a href="https://arxiv.org/abs/0912.0230">https://arxiv.org/abs/0912.0230</a>'], ['Hasegawa, Yasumasa; Kishigi, Keita: "Edge states in the three-quarter filled system,\n  $\\alpha$-(BEDT-TTF)$_2$I$_3$", 2010, <a href="https://arxiv.org/abs/1008.1832">https://arxiv.org/abs/1008.1832</a>'], ['Mouhcine, M.; Rich, R. M.; Ferguson, H. C.; Brown, T. M.; Smith, T. E.: "Halos of Spiral Galaxies. III. Metallicity Distributions", 2005, <a href="https://arxiv.org/abs/astro-ph/0510255">https://arxiv.org/abs/astro-ph/0510255</a>'], ['Frampton, Paul H.; Rohm, Ryan M.; Takahashi, Tomo: "Robustness and Predictivity of 4 TeV Unification", 2003, <a href="https://arxiv.org/abs/hep-ph/0302074">https://arxiv.org/abs/hep-ph/0302074</a>'], ['Abundo, Mario; Santoro, Maria Beatrice Scioscia: "On the the successive passage times of certain one-dimensional\n  diffusions", 2018, <a href="https://arxiv.org/abs/1803.09910">https://arxiv.org/abs/1803.09910</a>'], ['Venkataramanan, Ramji; Pradhan, S. Sandeep: "An Achievable Rate Region for the Broadcast Channel with Feedback", 2011, <a href="https://arxiv.org/abs/1105.2311">https://arxiv.org/abs/1105.2311</a>'], ['Ryu, Seungoh: "Effect of inhomogeneous surface relaxivity, pore geometry and internal\n  field gradient on NMR logging:exact and perturbative theories and numerical\n  investigations", 2009, <a href="https://arxiv.org/abs/0906.5327">https://arxiv.org/abs/0906.5327</a>'], ['Choubey, Sandhya; Bandyopadhyay, Abhijit; Goswami, Srubabati; Roy, D. P.: "SNO and the solar neutrino problem", 2002, <a href="https://arxiv.org/abs/hep-ph/0209222">https://arxiv.org/abs/hep-ph/0209222</a>'], ['May, Christopher; Wild, Michael; Rehberg, Ingo; Huang, Kai: "Analogue of surface melting in a macroscopic non-equilibrium system", 2013, <a href="https://arxiv.org/abs/1301.5540">https://arxiv.org/abs/1301.5540</a>'], ['Kalogera, Vassiliki: "Formation of Low-Mass X-ray Binaries. III. A New Formation Mechanism:\n  Direct Supernova", 1996, <a href="https://arxiv.org/abs/astro-ph/9608058">https://arxiv.org/abs/astro-ph/9608058</a>']]
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
