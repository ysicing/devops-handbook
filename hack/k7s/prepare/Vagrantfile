# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box_check_update = false
  config.vm.provider 'virtualbox' do |vb|
   vb.customize [ "guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold", 1000 ]
  end  
  config.vm.synced_folder ".", "/opt/godu", type: "nfs", nfs_udp: false
  $num_instances = 1
  (1..$num_instances).each do |i|
    config.vm.define "cododev#{i}" do |node|
      node.vm.box = "ysicing/debian"
      node.vm.hostname = "cododev#{i}"
      ip = "172.20.0.#{i+100}"
      node.vm.network "private_network", ip: ip
      node.vm.provider "virtualbox" do |vb|
        vb.gui = false
        vb.memory = "4096"
        vb.cpus = 2
        vb.name = "cododev#{i}"
        vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        vb.customize ["modifyvm", :id, "--ioapic", "on"]
        # cpu 使用率50%
        vb.customize ["modifyvm", :id, "--cpuexecutioncap", "50"]
      end
    end
  end
end