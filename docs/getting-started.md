## Using HyPhy

There are many ways to use HyPhy:

### Run HyPhy on our accompanying Datamonkey webserver
This option is the **easiest**, **supports most popular analyses**, and **does not require use of the command line**. Access Datamonkey [here](https://datamonkey.org).


### Run HyPhy from the command line
This option is the **most flexible** approach through which you can access **all available analyses and pipelines** as well as **customize** your own HyPhy analyses. Follow [these instructions](installation.md) for download and installation.  
HyPhy can be run from the command line in two ways:  

+ Standard command line tool: additional information available [here](./tutorials/CLI-tutorial.md) 
+ Interactive command line prompt: additional information available [here](./tutorials/CL-prompt-tutorial.md)


### Run HyPhy locally (on your own computer) without the command line
Two graphical user interfaces (GUI) applications are available for running HyPhy locally: 

+ A new GUI application of HyPHy which is very similar to the datamonkey interface except jobs are run on your own machine rather than on the datamonkey server (only availabe on Mac). Download, installation and usage tutorial available [here](./tutorials/gui-tutorial).  
+ A legacy GUI application of HyPhy which can run on Windows as well as Mac OS X (no longer developed, but still supporting many popular analyses). Follow [these instructions](installation.md) for download and installation.

### Use HyPhy on Galaxy
Many of the HyPhy methods are available for use as tools on a Galaxy server at [galaxy.hyphy.org](https://galaxy.hyphy.org). These tools can also be installed on any Galaxy instance from the Galaxy [tool shed](https://galaxyproject.org/admin/tools/add-tool-from-toolshed-tutorial/).

### Use HyPhy from MEGA
The popular [MEGA software package](https://www.megasoftware.net/) has begun integrating HyPhy tools into the MEGA interface. The current release has a limited set of HyPhy tools but this is expected to be expanded in the future.

### Use HyPhy for software/pipeline development
Compile HyPhy as a library that can be accessed via Python, R, or other language bindings. Follow [these instructions](installation.md) for download and installation. 

## Typical uses of HyPhy

HyPhy ships with a library of **standard analyses** that implement ~100 different methods from start to finish. HyPhy is most commonly used for **characterizing the evolutionary process**, in particular:

+ Detecting signatures of selection
+ Estimating evolutionary rates
+ Comparing different evolutionary models
+ Fitting custom models to sequence alignments

## Characterizing selective pressures

HyPhy provides a suite of diverse phylogenetic methodologies for testing specific hypotheses about selection in protein-coding and/or amino-acid multiple sequence alignments. Which method you select will depend on your specific question. Below we recommend several methods for different purposes, linked to more in depth descriptions. Tutorials for using these methods are also available [here](tutorials/CL-prompt-tutorial). 

> Note that you may find it useful to perform pre-processing on your dataset, specifically by screening for recombination breakpoints using our [GARD](./methods/standard-analyses/#gard) (**G**enetic **A**lgorithm for **R**ecombination **D**etection) method before proceeding to selection analysis.


### Are individual sites subject to *pervasive* (across the whole phylogeny) positive or purifying selection?
* [FEL](./methods/standard-analyses/#fel) (**F**ixed **E**ffects **L**ikelihood) is suitable for small-to-medium sized data sets.
* [SLAC](./methods/standard-analyses/#slac) (**S**ingle-**L**ikelihood **A**ncestor **C**ounting) is an approximate method with accuracy similar to FEL, but suitable for larger datasets. However, SLAC is not suitable for highly-diverged sequences.
* [FUBAR](./methods/standard-analyses/#fubar) (**F**ast, **U**nconstrained **B**ayesian **A**pp**R**oximation) is suitable for medium-to-large data sets and is expected to have more power than FEL for detecting pervasive selection at sites. **FUBAR is the preferred approach for inferring pervasive selection.**


### Are individual sites subject to *episodic* (at a subset of branches) positive or purifying selection?
* [MEME](./methods/standard-analyses/#meme) (**M**ixed **E**ffects **M**odel of **E**volution) tests for episodic selection at individual sites. Note that MEME does not accept *a priori* branch specifications (this feature is being introduced with `v2.3-dev` and later). **MEME is the preferred approach for detecting positive selection at individual sites.**


### Are individual branches subject to *episodic* (at a subset of sites) positive or purifying selection?

* [aBSREL](./methods/standard-analyses/#absrel) (**a**daptive **B**ranch-**S**ite **R**andom **E**ffects **L**ikelihood) is an improved version of the common "branch-site" class of models. aBSREL allows either for *a priori* specification of branch(es) to test for selection, or can test each lineage for selection in an exploratory fashion. Note that the exploratory approach will sacrifice power. **aBSREL is the preferred approach for detecting positive selection at individual branches.**


### Has a gene experienced positive selection at any site on a particular branch or set of branches?
* [BUSTED](./methods/standard-analyses/#busted) (**B**ranch-**S**ite **U**nrestricted **S**tatistical **T**est for **E**pisodic **D**iversification) will test for gene-wide selection at pre-specified lineages. This method is particularly useful for relatively small datasets (fewer than 10 taxa) where other methods may not have sufficient power to detect selection. **This method is not suitable for identifying specific sites subject to positive seleciton.**

### Has gene-wide selection pressure been relaxed or intensified along a certain subset of branches?
* [RELAX](./methods/standard-analyses/#relax) tests for a relaxation (e.g. where purifying selection has become less stringent) or an intensification (e.g. where purifying selection has become stronger) of selection pressures along a specified set of "test" branches. **This method is not suitable for detecting positive selection.**

### Are individual sites within a gene subject to *directional* selection, i.e. selection pressure to evolve towards a specific set of amino acids?
* [FADE](./methods/standard-analyses/#fade) tests for directional selection at specific sites in *protein* alignments.

