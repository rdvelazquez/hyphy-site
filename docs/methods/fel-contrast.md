## FEL-contrast

|   |   |
|---|---|
| HyPhy version required   |  &geq; 2.3.4 |
| Parallel support | MP and/or MPI |
| File path | `LIB/TemplateBatchFiles/SelectionAnalyses/FEL-contrast.bf` |
| Standard analysis menu | `Evolutionary Hypothesis Testing > FEL-contrast` |


### What biological question is the method designed to answer?

Which sites in a gene may be associated with adaptation to a different environment. You need a tree with branches partitioned (a priori) into two sets: reference and test.

### What are the recommended applications?

Suppose you have a gene which was sampled from different selective environments.
The specific example for which this tool was developed is evolution of HIV in different
hosts or different compartments (blood vs brain) in the host. Similar situations arise
when the gene is sampled from species living in different environment, eating different food,
having different wavelength eye sensitivity. This division has to be binary, however, so
that any branch in the tree is either in the **reference** environment, or the **test** environment.

FEL-contrast then allows you to examine selective pressures (measured as dN/dS) at each site
in the gene individually, and test whether or not they are different between environments.

Armed with a list of such sites, you could then attempt to explore if evolution at these sites
is associated with adaptation to the environment.

### What is the statistical procedure and statistical test is used to establish significance for this method?

For each site, three rates are inferred, with other parameters (frequencies, branch lengths) inferred jointly and held at

- &alpha; : synonymous substitution rate
- &beta; <sub>r</sub> : non-synonymous substitution rate along **reference** branches
- &beta; <sub>p</sub> : non-synonymous substitution rate along **test** branches

Two models are compared using a likelihood ratio test

- H<sub>A</sub>: &alpha;, &beta; <sub>r</sub>, and &beta; <sub>t</sub> are inferred by maximum likelihood as free parameters

- H<sub>0</sub>: The &beta; <sub>r</sub> := &beta; <sub>t</sub> constraint is enforced.

The models are nested and differ by one degree of freedom. p-values are computed using the limit &chi;<sup>2</sup> distribution with one degree of freedom.


### How should one interpret positive and negative test results?

A significant result at a site means that dN/dS (&beta;/&alpha) is **different** between the two sets of branches, with either an **increase** or a **decrease** on the test branches _relative_ to the reference branches. A significant finding does **not** make any claims about positive (dN/dS > 1) or negative (dN / dS < 1), just that dN/dS differ among sets of branches, i.e., a difference need not change the **mode** of selection.

Negative results do not mean that there is no difference, rather that whatever difference there may be does not rise to the level of statistical significance/

###  Rules of thumb for when this method is likely to work well, and when it is not.

 - Generally, you need 10 or more branches in each set to be able to have any statistical power.
 - Too little divergence is also likely to severely throttle statistical power.


### Example

We will analyze HIV-1 env sequences from a transmission pair: sequences are isolated from the putative source individual and the putative recipient individual from the 2005 study by [Frost et al](https://www.ncbi.nlm.nih.gov/pubmed/15858036).

1. Partition the tree into the source and recipient (here we include the transmission branch with the source sequences), for example as described [here](/resources/#labeling-branches-with-phylotree). For convenience, [download a NEXUS](/resources-files/data/HIVtransmission.nex) file with the tree already partitioned.

2. Run `HYPHYMP` or `HYPHYMPI`, select `Evolutionary Hypothesis Testing` from the menu
of analyses then select ` Use a FEL method to test which sites in a gene may be associated with adaptation to a different environment.` Alternatively, you can supply the path of the file as a command line argument, e.g. (by default `/path/to/hyphylib` should be `/usr/local/lib/hyphy`)

    ```
    $HYPHYMP /path/to/hyphylib/TemplateBatchFiles/SelectionAnalyses/FEL-contrast.bf
    ```

3. Select `Universal genetic code`

4. Input the path to the example file downloaded from the link above

5. Choose `SOURCE` as the test set

6. Select `Yes` to include synonymous rate variation

7. Input `0.1` for the default p-value

The analysis will now run for a few minutes and output the following results

----

### Branches to use as the test set in the FEL-contrast analysis
Selected 24 branches to include in FEL calculations: `0564_7, 0564_11, 0564_4, Node6, 0564_1, 0564_21, 0564_5, Node11, Node9, Node5, 0564_17, Node4, 0564_13, 0564_15, Node16, 0564_22, 0564_6, Node20, 0564_3, Node19, Node15, Node3, 0564_9, Node2`


### Obtaining branch lengths and nucleotide substitution biases under the nucleotide GTR model
* Log(L) = -5524.85, AIC-c = 11151.77 (51 estimated parameters)

### Obtaining the global omega estimate based on relative GTR branch lengths and nucleotide substitution biases
* Log(L) = -5436.84, AIC-c = 10991.98 (59 estimated parameters)
* non-synonymous/synonymous rate ratio for *background* =   0.9178
* non-synonymous/synonymous rate ratio for *test* =   0.8293

### Improving branch lengths, nucleotide substitution biases, and global dN/dS ratios under a full codon model
* Log(L) = -5436.29
* non-synonymous/synonymous rate ratio for *background* =   1.1136
* non-synonymous/synonymous rate ratio for *test* =   0.7748

### For partition 1 these sites are significant at p <=0.1

|     Codon      |     alpha      | beta-reference |   beta-test    |      LRT       |Difference detected?|
|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:------------------:|
|       4        |        0.000   |       22.380   |        0.000   |        3.390   |  Decr. p = 0.0656  |
|       52       |        0.000   |       20.982   |        0.000   |        3.384   |  Decr. p = 0.0658  |
|       83       |        0.000   |       20.365   |        0.000   |        3.389   |  Decr. p = 0.0656  |
|      118       |        0.000   |       17.179   |        0.000   |        3.404   |  Decr. p = 0.0651  |
|      124       |        0.000   |       23.346   |        0.000   |        3.396   |  Decr. p = 0.0653  |
|      155       |        0.000   |        0.000   |       64.943   |        5.045   |  Incr. p = 0.0247  |
|      187       |        0.000   |       20.934   |        0.000   |        3.577   |  Decr. p = 0.0586  |
|      218       |        0.000   |       20.825   |        0.000   |        3.519   |  Decr. p = 0.0607  |
|      222       |        0.000   |       22.658   |        0.000   |        3.459   |  Decr. p = 0.0629  |
|      224       |        0.000   |       25.874   |        0.000   |        3.681   |  Decr. p = 0.0550  |
|      352       |        0.000   |       19.420   |        0.000   |        3.411   |  Decr. p = 0.0648  |
|      386       |        0.000   |       20.334   |        0.000   |        3.387   |  Decr. p = 0.0657  |
|      417       |        0.000   |       21.316   |        0.000   |        3.383   |  Decr. p = 0.0659  |
|      455       |        0.000   |       22.010   |        0.000   |        3.398   |  Decr. p = 0.0653  |
|      462       |        0.000   |       69.066   |       10.567   |        3.860   |  Decr. p = 0.0494  |
|      466       |        0.000   |       55.142   |        0.000   |        7.562   |  Decr. p = 0.0060  |
|      506       |        0.000   |       33.154   |        0.000   |        3.438   |  Decr. p = 0.0637  |
|      526       |        0.000   |       50.810   |        5.313   |        3.351   |  Decr. p = 0.0672  |
|      533       |        0.000   |       21.489   |        0.000   |        3.485   |  Decr. p = 0.0619  |
|      598       |        0.000   |       18.103   |        0.000   |        3.392   |  Decr. p = 0.0655  |
|      633       |        7.019   |       20.227   |        0.000   |        3.393   |  Decr. p = 0.0655  |
|      748       |        0.000   |       36.773   |        0.000   |        6.388   |  Decr. p = 0.0115  |
|      751       |        0.000   |       18.447   |        0.000   |        3.123   |  Decr. p = 0.0772  |
|      762       |        0.000   |       18.868   |        0.000   |        3.402   |  Decr. p = 0.0651  |
|      788       |        0.000   |       26.735   |        0.000   |        3.937   |  Decr. p = 0.0472  |
|      820       |        0.000   |       56.371   |        0.000   |        9.657   |  Decr. p = 0.0019  |
|      824       |        0.000   |       19.630   |        0.000   |        3.604   |  Decr. p = 0.0576  |

### ** Found _1_ sites with **increased** dN/dS in the test branches relative to the reference branches and _26_ sites with **decreased** dN/dS selection at p <= 0.1**






