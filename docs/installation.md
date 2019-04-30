
Installation
===========
Please note that HyPhy is not currently available for Windows.

## Testing mkdocs-snippet-plugin

{{ snippet('git@github.com:veg/hyphy-analyses.git', 'README.md', '# HyPhy standalone analyses') }}


### Installing with Conda

`conda install hyphy`

_you will need to add the bioconda channel if you have not already done so:_  
`conda config --add channels bioconda`

### Building from source


> Before continuing, please [register and download HyPhy](register/).

**Once downloaded, install HyPhy as follows:**

1. Navigate to the newly downloaded/cloned HyPhy directory
        
        cd hyphy

2. Configure HyPhy using *CMake*

        cmake .
    
	* By default, HyPhy will be installed into `/usr/local/`, but it can be installed on any location of your system by specifying a custom installation path:

            cmake -DINSTALL_PREFIX=/location/of/choice .
    
	* If you prefer to use other build systems [supported by CMake](https://cmake.org/cmake/help/v3.0/manual/cmake-generators.7.html), such as *XCode*, configure HyPhy using the generator (`-G`) switch:
    
            cmake -G Xcode .

	* If would like to specify a particular C/C++ compiler (please note that it must support the C++-14 language standard) for your HyPhy build, use this command:

            cmake . -DCMAKE_CXX_COMPILER=/path/to/C++-compiler -DCMAKE_C_COMPILER=/path/to/C-compiler
 
* If you are building HyPhy under MacOS X, you can specify which version of SDK to use, for example:
    
            cmake -DCMAKE_OSX_SYSROOT=/Developer/SDKs/MacOSX10.9.sdk/ .

3. Build HyPhy by running `make` with one of the following build targets given below. Note that including the `-j` flag for make (i.e. `make -j <target>`) will dramatically speed this step up by taking advantage of multiple processors.


		## make the HYPHYMP executable:
		make MP
		## Faster:
		make -j MP
		
		## make the HYPHYMPI executable:
		make MPI

	*  `MP` - build a HyPhy executable (`HYPHYMP`) using [*OpenMP*](http://www.openmp.org) to support symmetric multiprocessing. If *OpenMP* is not installed or not supported by the compiler (e.g. LLVM), the compiled executable will not support multi-threading. You can confirm  case by examining the output from running `cmake`. If `openMP` is installed, you should see something similar to the following in the output:

            -- Performing Test OpenMP_FLAG_DETECTED
            -- Performing Test OpenMP_FLAG_DETECTED - Success
            -- Try OpenMP CXX flag = [-fopenmp]
            -- Performing Test OpenMP_FLAG_DETECTED
            -- Performing Test OpenMP_FLAG_DETECTED - Success
            -- Found OpenMP: -fopenmp  

	*  `MPI` - build a HyPhy executable (`HYPHYMPI`) using the message passing interface [MPI](http://mpi-forum.org) to support parallel execution on distributed systems (clusters). An MPI library (e.g., OpenMPI) must be installed and available in your path. You can check if this is the case by examining the output from running `cmake`. If `openMPI` is installed, you should see something similar to the following in the output:

                -- Found MPI_C: /opt/scyld/openmpi/1.6.3/gnu/lib/libmpi.so;/usr/lib64/libibverbs.so;/usr/lib64/libdat.so;/usr/lib64/librt.so;/usr/lib64/libnsl.so;/usr/lib64/libutil.so;/usr/lib64/libm.so;/usr/lib64/libtorque.so;/usr/lib64/libm.so;/usr/lib64/libnuma.so;/usr/lib64/librt.so;/usr/lib64/libnsl.so;/usr/lib64/libutil.so;/usr/lib64/libm.so

                -- Found MPI_CXX: /opt/scyld/openmpi/1.6.3/gnu/lib/libmpi_cxx.so;/opt/scyld/openmpi/1.6.3/gnu/lib/libmpi.so;/usr/lib64/libibverbs.so;/usr/lib64/libdat.so;/usr/lib64/librt.so;/usr/lib64/libnsl.so;/usr/lib64/libutil.so;/usr/lib64/libm.so;/usr/lib64/libtorque.so;/usr/lib64/libm.so;/usr/lib64/libnuma.so;/usr/lib64/librt.so;/usr/lib64/libnsl.so;/usr/lib64/libutil.so;/usr/lib64/libm.so


4. Finally, install HyPhy on your system with the command

        make install

    HyPhy will install either in its default location `/usr/local/`, or in any custom  `/location/of/choice/` provided when configuring *CMake*.
    
      * `HYPHYMP(I)` will be installed at  `/location/of/choice/bin`
      * `libhyphy_mp.(so/dylib/dll)` will be installed at `/location/of/choice/lib`
      * HyPhy's standard library of scripts/batchfiles will go into `/location/of/choice/lib/hyphy`


