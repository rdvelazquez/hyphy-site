## Analysis list

> This is not a complete list, but the new analyses will be described here.
> Other places to look are [manuscript associated analyses](https://github.com/spond/pubs/),
> and the [GitHub boards](https://github.com/veg/hyphy/issues?q=)

### FEL-contrast

For each site in a codon alignment, estimate whether or not dN/dS ratios
differ between sets of branches defined _a priori_. If the branches are associated with
different selective environments, this could be used to generate a list of sites that may
be evolving at different rates (under different selective pressures) in these environments.

- Outputs a list of sites where `test` branches have a statistically detectable difference
    in dN/dS from `reference` branches.
- Could be used to test for **differential** selection pressures, for example between
    host and recipient or individual anatomical compartments in HIV-1, or in between species
    with different phenotypes/traits.

[Further information](fel-contrast.md)
